import React, {ChangeEvent, useState} from "react";
import {Button, Card, InputGroup, Label} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import "./login.css"
import {useSecurity} from "../../logic/useSecurity";
import {useHistory} from "react-router";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const {isLoading, loginUser, signUpUser,error} = useSecurity()
    const history = useHistory();

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleLogin = () => {
        history.push('/');
        loginUser(username, password);
    }

    const handleSignUp = () => {
        history.push('/');
        signUpUser(username, password);
    }

    const lockButton = (
        <Button
            icon={showPassword ? "unlock" : "lock"}
            intent={Intent.WARNING}
            minimal={true}
            onClick={() => setShowPassword(prevState => !prevState)}
        />
    );
    return (
        <div className={"center"}>
            <Card elevation={2} className={"login"}>
                <div className={"text"}>
                    <h1>Welcome to Trivia</h1>
                </div>
                <div className={"text"}>
                    <h1>Please login</h1>
                </div>
                <div>
                    <Label>
                        Username:
                        <InputGroup
                            value={username}
                            onChange={handleUsernameChange}
                            small
                            placeholder="Username..."/>
                    </Label>
                </div>
                <div>
                    <Label>
                        Password
                        <InputGroup
                            small
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Username..."
                            rightElement={lockButton}
                            type={showPassword ? "text" : "password"}/>
                    </Label>
                </div>
                {error?
                    <div className={"error"}>
                        Invalid information. Maybe signup?
                    </div>
                :
                null}
                <div>
                    <Button
                        intent={Intent.PRIMARY}
                        onClick={handleLogin}
                        fill>
                        Log In
                        {isLoading && <span className={"loading"}/>}
                    </Button>
                </div>
                <div>
                    <Button
                        intent={Intent.WARNING}
                        onClick={handleSignUp}
                        fill>
                        Create New User
                        {isLoading && <span className={"loading"}/>}
                    </Button>
                </div>

            </Card>
        </div>
    )

}

export default Login;
