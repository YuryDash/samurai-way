import s from "../Profile.module.css";
import React from "react";
import {ProfileUsersType} from "../../../redux/profile-reducer";

type PropsInfoType = {
    profileInfo: ProfileUsersType
}


export function UserInfo(props: PropsInfoType) {


    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img
                    // src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                     src={props.profileInfo.photos.small}
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
                    <h3>Contacts</h3>
                    <div>Instagram: <span>{props.profileInfo.contacts.instagram}</span></div>
                    <div>GitHub: <span>{props.profileInfo.contacts.github}</span></div>
                    <div>Facebook: <span>{props.profileInfo.contacts.facebook}</span></div>
                    <div> VK: <span>{props.profileInfo.contacts.vk}</span></div>
                    <div>Twitter: <span>{props.profileInfo.contacts.twitter}</span></div>


                </div>
            </div>
        </div>
    )

}