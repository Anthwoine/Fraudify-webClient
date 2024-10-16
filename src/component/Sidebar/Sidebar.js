import React, { useRef, useState } from "react"
import SidebarButton from "./Button/SidebarButton"
import './Sidebar.scss'
import {
    Home,
    Disc3,
    Download,
    Library,
    Heart,
    Folder,
    Search,
    LogOut,
    UserRound
} from "lucide-react"


function Sidebar() {
    const [isRotating, setIsRotating] = useState(false)

    const logoRef = useRef();

    return (
        <nav className="sidebar">
            <div className={"content"}>
                <div className={"music menu-container"}>
                    <div className={"menu-header"}>
                        <span className={"title"}>MUSIC</span>
                    </div>
                    <div>
                        <ul>
                            <SidebarButton title={"Search"} icon={Search} to={"/browse"}/>
                            <SidebarButton title={"Home"} icon={Home} to={"/home"}/>
                        </ul>
                    </div>

                </div>

                <div className={"my-music menu-container"}>
                    <div className={"menu-header"}>
                        <span className={"title"}>MY MUSIC</span>
                    </div>
                    <div>
                        <ul>
                            <SidebarButton title={"Liked"} icon={Heart} to={"/likes"}/>
                            <SidebarButton title={"Local Song"} icon={Folder} to={"/local"}/>
                            <SidebarButton title={"Your Library"} icon={Library} to={"/library"}/>
                            <SidebarButton title={"Downloads"} icon={Download} to={"/download"}/>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={"footer"}>
                <div className={"footer-container"}>
                    <div className={"user"}>
                        {
                            localStorage.getItem("profilePicture") ? (
                                <img src={localStorage.getItem("profilePicture")} className={"user-image"} alt={"user"}/>
                            ) : (
                                <UserRound size={50} strokeWidth={1.5} className={"user-image"}/>
                            )
                        }
                        <div>
                            <span className={"name"}>{ localStorage.getItem('username') || 'Username' }</span>
                        </div>
                    </div>
                    <div className={"logout-button"}>
                        <LogOut size={40} strokeWidth={2} className={"icon"} onClick={() => {
                            localStorage.clear()
                            window.location.href = "/login"
                        }}/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Sidebar;