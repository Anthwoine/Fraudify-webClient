import './header.scss'
import { Disc3, Globe, Home, Download } from "lucide-react";
import React, {useCallback, useRef, useState} from "react";
import { Link } from 'react-router-dom';
import SearchInput from "../input/search/SearchInput";
import HeaderButton from "../Button/nav/HeaderButton";
import User from "../user/User";

function Header() {
    const [searchValue, setSearchValue] = useState("");
    const [isRotating, setIsRotating] = useState(false)

    const searchRef = useRef();
    const logoRef = useRef();

    const handleInputChange = useCallback((event) => {
        setSearchValue(event.target.value);
    }, []);

    return (
        <div className={"header"}>
            <div className={"logo"}>
                <span className="image">
                    <Disc3
                        size={60}
                        strokeWidth="2"
                        className={"disc"}
                        ref={logoRef}
                        onClick={() => {
                            if (!isRotating) {
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
                </div>
            </div>


            <div className={"search-container"}>

                <div className={"header-nav"}>

                    <HeaderButton
                        icon={Home}
                        to={"home"}
                    />

                    <Link to={"/search"}>
                        <div className="input-container">
                            <SearchInput/>
                        </div>
                    </Link>

                    <HeaderButton
                        icon={Globe}
                        to={"search"}
                    />

                    <HeaderButton
                        icon={Download}
                        to={"download"}
                    />
                </div>


            </div>


            <div className={"user"}>
                <User/>
            </div>
        </div>
    )
}

export default Header;