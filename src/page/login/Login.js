import React, { useRef, useState } from "react";
import PageTitle from "../../component/title/PageTitle";
import { Disc3 } from 'lucide-react';
import "./login.scss";
import LoginForm from "../../component/form/login/LoginForm";



function Login() {

    const [isRotating, setIsRotating] = useState(false)
    const logoRef = useRef();

    const rotate = () => {
        if(!isRotating) {
            setIsRotating(true)
            logoRef.current?.classList.add("rotate-animation")
            setTimeout(() => {
                logoRef.current?.classList.remove("rotate-animation")
                setIsRotating(false)
            }, 2000)
        }

    }

    return (
        <>
            <PageTitle title="Log in | Fraudify" className={"page-title"}/>
            <div className={"login"}>
                <div className="logo">
                    <Disc3
                        ref={logoRef}
                        className={"disc"}
                        size="200"
                        strokeWidth="2"
                        onClick={() => rotate() }
                    />
                </div>

               <LoginForm />
            </div>
        </>
    );
}

export default Login;