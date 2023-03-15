import React from "react";
import s from "./Profile.module.css"
import {UserInfo} from "./UserInfo/UserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile() {
    return (
        <div>
            <div className={s.my__data}>
                <div className={s.avatar}>
                    <img
                        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                        alt="Just Avatar"/>
                </div>
                <UserInfo/>
            </div>

            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}