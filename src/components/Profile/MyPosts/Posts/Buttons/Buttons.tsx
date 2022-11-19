import React from "react";
import s from "./Buttons.module.css"




export type PropsButtons = {
    likes?: number
    disLikes?:number
    onClick:()=>void
}

export const ButtonsLike = (props: PropsButtons) => {
    return (
        <span>
            <button onClick={props.onClick}  className={s.buttonLike}>LIKE: <span className={s.likeNum}>{props.likes}</span></button>
        </span>
    )
}
export const ButtonsDislike = (props: PropsButtons) => {
    return (
        <span>
            <button onClick={props.onClick} className={s.buttonDis}>DISLIKE: <span className={s.disLikeNum}>{props.disLikes}</span></button>
        </span>
    )

}