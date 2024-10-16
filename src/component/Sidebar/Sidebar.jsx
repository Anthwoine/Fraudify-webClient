import React, { useRef, useState } from "react"
import SidebarButton from "./Button/SidebarButton"
import './Sidebar.scss'
import {
    Home,
    Download,
    Library,
    Heart,
    Folder,
    Search,
} from "lucide-react"


function Sidebar() {
    return (
        <nav className="sidebar">
            <div className={"content"}>
                <div className={"music menu-container"}>
                    <div className={"menu-header"}>
                        <span className={"title"}>MUSIC</span>
                    </div>
                    <div>
                        <ul>
                            <SidebarButton title={"Search"} icon={Search} to={"/search"}/>
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
        </nav>
    )
}

export default Sidebar;