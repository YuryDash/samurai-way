import React from "react";
import s from "./Posts.module.css"

export const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8f69N306YjlMvJTUad0Q5iwUU2SRfKa0aQ&usqp=CAU" alt="ava"/>
                <div>User Name</div>
            </div>
            <div className={s.text}>Post-1</div>

            <button>LIKE</button>
            <button>DISLIKE</button>
        </div>
    )
}