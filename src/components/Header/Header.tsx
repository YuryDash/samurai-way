import React from "react";
import s from "./Header.module.css"
import avatar from "../../img/logo/LogoStart1.png"

export const Header = () => {
    return (
        <>
        <header className={s.header}>
            <img src={avatar} alt="just logo"/>
        </header>
        </>
    );
}