import s from "../Profile.module.css";
import React from "react";

export function UserInfo() {
    return (
        <div className={s.info}>
            <div>
                Yury Dashukevich
            </div>
            <div>
                <div>Date of birth: <span> 12.06</span></div>
                <div>City: <span> Minsk</span></div>
                <div>Education: <span> Auto Mechanical College</span></div>
                <div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>
            </div>
        </div>
    )
}