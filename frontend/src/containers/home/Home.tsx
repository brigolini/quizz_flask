import React from "react";
import {Button, Spinner} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {beginTrivia, fetchTrivia} from "../../redux/actions";
import {logout} from "../../redux/actions/security/SecurityActions";


export function Home() {
    const history = useHistory();
    const quizz = useSelector(((state: RootStateType) => state.trivia));
    const dispatch = useDispatch();

    const handleBegin=()=>{
        dispatch(beginTrivia());
        history.push("/trivia")
    }

    const handleLogout=()=>{
        dispatch(logout());
    }

    if (!quizz.questions) {
        dispatch(fetchTrivia());
    }
    return (
        <>
            <div className={"header"}>
                <div className={"center-text"}>
                    <h1>Welcome to the Trivia Challenge!</h1>
                </div>
            </div>

            <div className={"main"}>
                <div className={"center"}>
                    <Button fill intent={Intent.PRIMARY} onClick={handleBegin}>
                        Begin {!quizz.questions ? <span className={"loading"}/> : null}
                    </Button>
                    <Button fill intent={Intent.DANGER} onClick={handleLogout}>
                        Logout
                    </Button>

                </div>
            </div>
        </>
    )
}
