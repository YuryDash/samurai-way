import React from "react";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.my__post}>
            <div className={s.newPostTitle}>NEW POST</div>
            <div className={s.newPost}>
                <textarea className={s.textarea}  placeholder={'New Posts'} id="1"> </textarea>
                <button className={s.button}>Send Posts</button>
            </div>
        </div>
    );
}