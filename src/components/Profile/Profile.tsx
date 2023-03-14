import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./MyPosts/Posts/Posts";
import {UserInfo} from "./UserInfo/UserInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PostsDataType} from "../../redux/store";


type PropsType = {
    postsData: PostsDataType
}


export function Profile(props: PropsType) {

    const mapPostsData = props.postsData.posts.map(el => <Posts key={el.id} message={el.text} id={el.id}/>)

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
                <MyPostsContainer state={props.postsData} />
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>
    )
}