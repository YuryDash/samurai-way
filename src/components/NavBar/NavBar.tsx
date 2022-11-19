import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
let active = s.active;
export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive? active: ''}  to="/profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive? active: ''} to="/dialogs" >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive? active: ''} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive? active: ''} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive})=>isActive? active : ''} to="/settings">Settings</NavLink>
            </div>
        </nav>

    )
}