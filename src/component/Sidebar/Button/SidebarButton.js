import React from "react";
import { NavLink } from "react-router-dom";

function SidebarButton({ to, title, icon: Icon }) {
    return (
        <li className="nav-link">
            <NavLink
                to={to}
                style={{ textDecoration: 'none', color: 'inherit' }}
                className={({ isActive }) =>
                    `action-btn ${isActive ? 'active' : ''}`
                }
            >
                <div className="action action-btn">
                    {Icon && <Icon className="icon" size={35} />}
                    <span className="text nav-text">{title}</span>
                </div>
            </NavLink>
        </li>
    );
}

export default SidebarButton;