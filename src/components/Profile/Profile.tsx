import React from "react";
import s from "./Profile.module.css"
import {Posts} from "./MyPosts/Posts/Posts";
import {UserInfo} from "./UserInfo/UserInfo";
import {addPostAC} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PostsDataType} from "../../redux/store";


type PropsType = {
    postsData: PostsDataType
    dispatch: (action: any) => void
}



export function Profile(props: PropsType) {

    // let [post, setPost] = useState(props.postsData.posts)

    const makePosts = (text: string) => {
        console.log(text + ' fn make post ')
        props.dispatch(addPostAC(text))
    }

    const mapPostsData = props.postsData.posts.map( el => <Posts key={el.id} message={el.text} id={el.id}/>)

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
                <MyPostsContainer makePosts={makePosts}
                         newPostText={props.postsData.newPostsText}
                         dispatch={props.dispatch}/>
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>
    )
}