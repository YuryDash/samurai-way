import React from "react";
import s from "./Profile.module.css"
import {MyUserInfo} from "./UserInfo/MyUserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile() {
    return (
        <div className={s.my__data}>

            <MyUserInfo/>
            <MyPostsContainer/>

        </div>
    )
}