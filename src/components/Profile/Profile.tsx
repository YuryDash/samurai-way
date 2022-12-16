import React, {useState} from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "./MyPosts/Posts/Posts";
import {v1} from "uuid";
import {UserInfo} from "./UserInfo/UserInfo";
import {PostsDataType} from "../../App";

type PropsType = {
    postsData: PostsDataType[]
}

export function Profile(props: PropsType) {

    // let postsData = [
    //     {id: v1(), text: 'hi how are u?'},
    //     {id: v1(), text: 'u?'},
    // ]

    let [post, setPost] = useState(props.postsData)

    const makePosts = (text: string) => {
        let makePost = {id: v1(), text: text}
        setPost([ ...post, makePost])
    }
    const deletePost = (id: string) => {
        setPost( post.filter( el => el.id !== id ) )
    }

    const mapPostsData = post.map( (el) => <Posts deletePost={deletePost} id={el.id} message={el.text}/>)

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
                <MyPosts makePosts={makePosts}  />
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>

    )
}