import React from 'react';
import {Card} from "@blueprintjs/core";
import {Result} from "./containers/result/Result";
import {Home} from "./containers/home/Home";
import {Trivia} from "./containers/trivia/Trivia";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import {ApiError} from "./components/api-error/ApiError";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import Login from "./containers/login/Login";


function App() {
    const token = useSelector((state:RootStateType)=>state.security).token
    return (
        <>
            <HashRouter>
            {!token?
                <Login/>
            :
                <div className={"screenContainer"}>
                    <div className={"app"}>
                        <Card className={"appConteiner"} elevation={2}>

                                <Switch>
                                    <Route path={"/"} exact component={Home}/>
                                    <Route path={"/trivia"} exact component={Trivia}/>
                                    <Route path={"/result"} exact component={Result}/>
                                </Switch>
                        </Card>
                    </div>
                </div>

            }
            </HashRouter>
            <ApiError/>
        </>
    );
}

export default App;
