import {useDispatch} from "react-redux";
import {useState} from "react";
import {login, logout, signUp} from "../redux/actions/security/SecurityActions";

type UseSecurityType = {
    isLoading: boolean;
    error: boolean;
    loginUser: (username: string, password: string) => void,
    signUpUser: (username: string, password: string) => void,
    logOutUser: () => void
}
export const useSecurity = (): UseSecurityType => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const loginUser = async (username: string, password: string) => {
        if ((!username) || (!password)){
            setError(true);
            return;
        }
        setIsLoading(true);
        try {
            await dispatch(login({username, password}));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(true);
        }
    }

    const signUpUser = async (username: string, password: string) => {
        setIsLoading(true);
        if ((!username) || (!password)) return;
        try {
            await dispatch(signUp({username, password}));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(true);
        }
    }

    const logOutUser = async () => {
        await dispatch(logout());
    }

    return {isLoading, error, loginUser, signUpUser, logOutUser}
}
