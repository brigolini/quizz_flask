import Axios, {AxiosInstance, AxiosRequestConfig} from "axios";


const baseURL = 'http://localhost:5000';
export const getAxiosInstance = (token?:string): AxiosInstance => {
    const config:AxiosRequestConfig = {headers:{}};
    config.baseURL = baseURL;
    if (token)
        config.headers['Authorization'] = `JWT ${token}`;
    const axiosInstance = Axios.create(config);
    axiosInstance.interceptors.response.use(response => response,
        (error)=>{
            const {status} = error.response;
            if (status>399) throw new Error ("Error Accessing API");
        })
    return axiosInstance;
}

