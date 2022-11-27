import React, {useState} from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "./MyPosts/Posts/Posts";
import {v1} from "uuid";



export const Profile = () => {

    let postsData = [
        {id: v1(), text: 'hi how are u?'},
        {id: v1(), text: 'u?'},
    ]
    let [post, setPost] = useState(postsData)


    const makePosts = (text: string) => {
        let makePost = {id: v1(), text: text}
        setPost([makePost, ...post])
    }


    const mapPostsData = post.map( (el) => <Posts message={el.text}/>)


    return (
        <div>
            <div className={s.my__data}>
                <div className={s.avatar}>
                    <img
                        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                        alt="Just Avatar"/>
                </div>

                <div className={s.info}>
                    <div>
                        Yury Dashukevich
                    </div>
                    <div >
                        <div>Date of birth: <span> 12.06</span></div>
                        <div>City: <span> Minsk</span></div>
                        <div>Education: <span> Auto Mechanical College</span></div>
                        <div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>
                    </div>
                </div>
            </div>

            <div>
                <MyPosts
                    makePosts={makePosts}
                    postsData={postsData}

                />
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>

    )
}