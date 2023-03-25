import React from "react";
import s from "./Profile.module.css"
import {UserInfo} from "./UserInfo/UserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUsersType} from "../../redux/profile-reducer";

type PropsType = {
    profileState: ProfileUsersType
}

export function Profile(props: PropsType) {

    return (
        <div className={s.my__data}>

            <UserInfo profileInfo={props.profileState}/>
            <MyPostsContainer/>

        </div>
    )
}