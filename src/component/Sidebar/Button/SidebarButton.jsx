import React from "react";
import { NavLink } from "react-router-dom";

function SidebarButton({ to, title, icon: Icon }) {
    return (
        <div className="nav-link">
            <NavLink
                to={to}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className={({ isActive }) =>
                    `action-btn ${isActive ? 'active' : ''}`
                }
            >
                <div className="action">
                    {Icon && <Icon className="icon" size={25} strokeWidth={1.75} />}
                    <span className="text nav-text">{title}</span>
                </div>
            </NavLink>
        </div>
    );
}

export default SidebarButton;