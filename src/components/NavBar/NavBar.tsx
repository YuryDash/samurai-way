import React from "react";
import s from "./NavBar.module.css"


export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="src/components/NavBar/NavBar#">Profile</a>
            </div>
            <div className={s.item}>
                <a href="src/components/NavBar/NavBar#">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components/NavBar/NavBar#">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/NavBar/NavBar#">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components/NavBar/NavBar#">Settings</a>
            </div>
        </nav>

    )
}