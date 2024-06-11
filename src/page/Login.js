import React, {useRef, useState, useEffect} from "react";
import PageTitle from "../component/title/PageTitle";
import { Disc, Disc2,  Disc3 } from 'lucide-react';
import "./Login.css";
import InputText from "../component/input/InputText";
import { login } from "../service/AuthService";
import { CircleUserRound } from 'lucide-react';
import { KeyRound } from 'lucide-react';



function Login() {

    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isRotating, setIsRotating] = useState(false)

    const usernameRef = useRef();
    const passwordRef = useRef();
    const logoRef = useRef();


    useEffect(() => {
        setTimeout(() => {
            setShowErrorMessage(false)
        }, 5000);
    }, [showErrorMessage])




    const authentication = () => {
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
        <>
            <PageTitle title="Log in | Fraudify" />
            <div className={"login"}>
                <div className="logo">
                    {
                        <Disc3
                            ref={logoRef}
                            className={"disc"}
                            size="200"
                            strokeWidth="2"
                            onClick={() =>{
                                if(!isRotating) {
                                    setIsRotating(true)
                                    logoRef.current?.classList.add("rotate-animation")
                                    setTimeout(() => {
                                        logoRef.current?.classList.remove("rotate-animation")
                                        setIsRotating(false)
                                    }, 2000)
                                }
                            }}
                        />
                    }
                </div>

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
                    <button onClick={ authentication } className="button-style">Login</button>
                </div>
            </div>

            {
                showErrorMessage &&
                <div className="error-message">
                    {errorMessage}
                </div>
            }

        </>
    );
}

export default Login;