import React from "react";
import s from "./Buttons.module.css"

export type SubmitType = "reset" | "button" | "submit"

export type PropsButtons = {
    name: string
    callBack?: ()=> void
    className?: string
    submit?: SubmitType
}


export const Buttons = (props: PropsButtons) => {

    return(
        <button type={props.submit} className={s.button} onClick={props.callBack}>{props.name}</button>
    )
}

























// export const ButtonsLike = (props: PropsButtons) => {
//     return (
//         <span>
//             <button onClick={props.onClick}  className={s.buttonLike}>LIKE: <span className={s.likeNum}>{props.likes}</span></button>
//         </span>
//     )
// }
// export const ButtonsDislike = (props: PropsButtons) => {
//     return (
//         <span>
//             <button onClick={props.onClick} className={s.buttonDis}>DISLIKE: <span className={s.disLikeNum}>{props.disLikes}</span></button>
//         </span>
//     )
//
// }

