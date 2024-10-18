import './user.scss'
import {Popover, Typography} from "@mui/material";
import {useState} from "react";


function User() {
    const [anchorEl, setAnchorEl] = useState(null);


    const handlePopoverOpen = (event) => {
        if(anchorEl === null) {
            setAnchorEl(event.currentTarget);
        }else {
            setAnchorEl(null)
        }
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <div className="user">
                <div
                    className={"user-profil"}
                >
                    <img
                        src="http://localhost:9090/images/default.svg"
                        className={"user-image"}
                        alt={""}
                        onClick={handlePopoverOpen}
                    />
                </div>
            </div>

            <Popover
                id={'mouse-over-popover'}
                className={"header-popover"}
                sx={{
                    marginTop: '60px',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={ handlePopoverClose }
                disableRestoreFocus
            >
                <Typography sx={{ p: 2 }}>popover user</Typography>
            </Popover>
        </>

    )
}

export default User;