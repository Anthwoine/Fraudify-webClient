import React, {useEffect, useRef, useState} from "react"
import SidebarButton from "./Button/SidebarButton"
import './Sidebar.css'
import {
    Home,
    Disc3,
    Download,
    Compass,
    Library,
    Heart
} from "lucide-react"
import InputText from "../input/InputText";


function Sidebar() {
    const [isRotating, setIsRotating] = useState(false)

    const searchRef = useRef();
    const logoRef = useRef();

    return (
        <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image">
                        <Disc3
                            size={50}
                            strokeWidth="1.5"
                            className={"disc"}
                            ref={logoRef}
                            onClick={() =>{
                                console.log("isRotating : ", isRotating)
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
                    </span>

                    <div className="text header-text">
                        <span className="name">Fraudify</span>
                        <span className="profession">Music for everyone</span>
                    </div>
                </div>

                <span></span>
            </header>

            <InputText
                entryLabel="Search"
                entryType="text"
                reference={searchRef}
                error={false}
                className={"search-input"}
            />

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <SidebarButton title="Home" icon={Home} to="/home"/>
                        <SidebarButton title="Browse" icon={Compass} to="/browse"/>
                        <SidebarButton title="Download" icon={Download} to="/download"/>
                        <SidebarButton title="Search" icon={Heart} to="/likes"/>
                        <SidebarButton title="Your Library" icon={Library} to="/library"/>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Sidebar;