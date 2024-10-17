import SidebarButton from "./Button/SidebarButton"
import './Sidebar.scss'
import {
    Library,
    Heart,
    Folder,
} from "lucide-react"


function Sidebar() {
    return (
        <nav className="sidebar">
            <div className={"content"}>

                <div className={"my-music menu-container"}>
                    <div className={"menu-header"}>
                        <span className={"title"}>MY MUSIC</span>
                    </div>
                    <div>
                        <ul>
                            <SidebarButton title={"Liked"} icon={Heart} to={"/likes"}/>
                            <SidebarButton title={"Local Song"} icon={Folder} to={"/local"}/>
                            <SidebarButton title={"Your Library"} icon={Library} to={"/library"}/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;