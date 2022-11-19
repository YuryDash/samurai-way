import React from "react";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.my__post}>
            <div>NEW POST</div>
            <div className={s.newPost}>
                <textarea  placeholder={'New Posts'} id="1"> </textarea>
                <button>Send Posts</button>
            </div>
        </div>
    );
}