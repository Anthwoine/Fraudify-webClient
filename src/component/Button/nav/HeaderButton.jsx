import { NavLink } from "react-router-dom";
import {Popover, Typography} from "@mui/material";
import {useRef, useState} from "react";
import './headerButton.scss';

function HeaderButton({ icon : Icon, to }) {
    const [anchor, setAnchor] = useState(null);
    const timeoutRef = useRef(null)

    const handlePopoverOpen = (event) => {
        setAnchor(event);
    };

    const handlePopoverClose = () => {
        setAnchor(null);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    };

    const open = Boolean(anchor);

    return (
        <>
            <NavLink
                to={`/${to}`}
                className = {({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}

            >
                <div
                    className={ `nav-icon` }
                    onMouseEnter={(event) => {
                        const target = event.currentTarget;
                        timeoutRef.current = setTimeout(() => handlePopoverOpen(target), 500)
                    }}
                    onMouseLeave={handlePopoverClose}
                >
                    <Icon size={25} strokeWidth={2}/>
                </div>
            </NavLink>


            <Popover
                id="mouse-over-popover"
                className={"header-popover"}
                sx={{
                    pointerEvents: 'none',
                    marginTop: '5px',
                }}
                open={open}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                disableRestoreFocus
            >
                <div className={"popover-container"}>
                    <Typography sx={{ p: 2 }}>{ to }</Typography>
                </div>

            </Popover>
        </>
    );
}

export default HeaderButton;