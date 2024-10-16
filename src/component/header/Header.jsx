import './header.scss'
import InputText from "../input/InputText";
import {Disc3, Search} from "lucide-react";
import React, {useCallback, useRef, useState} from "react";
import { Link } from 'react-router-dom';

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

            <Link to={"/search"}>
                <div className={"search"}>
                    <div className="search-input">
                        <InputText
                            entryLabel="Browse"
                            entryType="text"
                            reference={searchRef}
                            icon={<Search size={20}/>}
                            inputHandler={handleInputChange}
                            value={searchValue}  // Liez la valeur de l'input à l'état
                        />
                    </div>
                </div>
            </Link>


            <div className={"user"}> user</div>
        </div>
    )
}

export default Header;