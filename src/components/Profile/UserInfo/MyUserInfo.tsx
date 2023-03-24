import s from "../Profile.module.css";
import React from "react";

export function MyUserInfo() {
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                    alt="Just Avatar"/>
            </div>

            <div className={s.description}>
                <h3>
                    Yury Dashukevich
                </h3>
                <div>
                    <div>Date of birth: <span> 12.06</span></div>
                    <div>City: <span> Minsk</span></div>
                    <div>Education: <span> Auto Mechanical College</span></div>
                    <div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>
                </div>
            </div>
        </div>
    )
}