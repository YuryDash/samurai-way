import s from "../Profile.module.css";
import React from "react";
import {ProfileUsersType} from "../../../redux/profile-reducer";
import { UserStatus } from "./UserStatus";

type PropsInfoType = {
    profileState: ProfileUsersType | null
    status: string
    getUserUpdateStatus: ( status: string ) => void
}


export function UserInfo(props: PropsInfoType) {

      let imageUrl = "data:image/jpeg;base64,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"
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                {
                   !props.profileState?.photos?.small ? <img
                    src={imageUrl}
                    //src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                    alt="123123"/>
                    : <img
                    // src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                    src={props.profileState?.photos?.small ?? ''}
                    alt=""/>
                }
            </div>

            <div className={s.description}>
                <h3>
                    name: {props.profileState?.fullName}
                    <UserStatus getUserUpdateStatus={props.getUserUpdateStatus} status={props.status}  />
                </h3>
                <div>
                    {/*<div>Date of birth: <span> 12.06</span></div>*/}
                    {/*<div>City: <span> Minsk</span></div>*/}
                    {/*<div>Education: <span> Auto Mechanical College</span></div>*/}
                    {/*<div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>*/}
                    <h3>Contacts</h3>
                    <div>Instagram: <span>{props.profileState?.contacts?.instagram || 'not entered'} </span></div>
                    <div>GitHub: <span>{props.profileState?.contacts?.github || 'not entered' }</span></div>
                    <div>Facebook: <span>{props.profileState?.contacts?.facebook || 'not entered'}</span></div>
                    <div> VK: <span>{props.profileState?.contacts?.vk || 'not entered'}</span></div>
                    <div>Twitter: <span>{props.profileState?.contacts?.twitter || 'not entered'}</span></div>
                </div>
            </div>
        </div>
    )

}