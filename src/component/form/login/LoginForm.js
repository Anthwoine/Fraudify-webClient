import InputText from "../../input/InputText";
import {CircleUserRound, KeyRound} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import {login} from "../../../service/AuthService";
import "./loginForm.scss"

function LoginForm() {

    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setShowErrorMessage(false)
        }, 10000);
    }, [showErrorMessage])

    const authentication = () => {
        setShowErrorMessage(false)
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        if(!!username && !!password) {
            login(username, password)
                .then(async (response) => {
                    const data = await response.json()
                    if(response.status === 200) {
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("username", data.username)
                        localStorage.setItem("userId", data.id)
                        localStorage.setItem("profilePicture", data.profilePicture)
                        window.location.href = "/home"
                    } else {
                        setShowErrorMessage(true)
                        setErrorMessage(data.message)
                    }
                })
        } else {
            setShowErrorMessage(true)
            setErrorMessage("Please fill in the fields")
        }
    }

    return (
        <div className={"login-form"}>
            <div className="input">
                <InputText
                    entryLabel="Username"
                    entryType="text"
                    className={"login-input"}
                    reference={usernameRef}
                    error={showErrorMessage}
                    icon={<CircleUserRound size="25" strokeWidth="2" className={"icon"}/>}
                />
            </div>

            <div className="input">
                <InputText
                    entryLabel="Password"
                    entryType="password"
                    className={"login-input"}
                    reference={passwordRef}
                    error={showErrorMessage}
                    icon={<KeyRound size="25" strokeWidth="2" className={"icon"}/>}
                />
            </div>

            <div className="line-container">
                <div className="line"></div>
                <h2> Fraudify </h2>
                <div className="line"></div>
            </div>

            <div className="submit">
                <button onClick={authentication} className="button">Login</button>
                {
                    showErrorMessage &&
                    <div className="error-message">
                        {errorMessage}
                    </div>
                }
            </div>
        </div>
    );
}

export default LoginForm;