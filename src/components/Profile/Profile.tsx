import React, {useState} from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "./MyPosts/Posts/Posts";
import {UserInfo} from "./UserInfo/UserInfo";
import { PostsDataType} from "../../redux/state";
import {addPostAC} from "../../redux/profile-reducer";


type PropsType = {
    postsData: PostsDataType
    dispatch: (action: any) => void
}



export function Profile(props: PropsType) {

    let [post, setPost] = useState(props.postsData.posts)

    const makePosts = (text: string) => {
        console.log(text + ' fn make post ')
        props.dispatch(addPostAC(text))
    }

    const mapPostsData = post.map( (el) => <Posts key={el.id} id={el.id} message={el.text}/>)



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
                <MyPosts makePosts={makePosts}
                         newPostText={props.postsData.newPostsText}
                         dispatch={props.dispatch}/>
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>
    )
}