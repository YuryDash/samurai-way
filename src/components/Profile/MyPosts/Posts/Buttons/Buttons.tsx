import React from "react";
import s from "./Buttons.module.css"




export type PropsButtons = {
    name: string
    callBack: ()=> void
    className?: string
}



export const Buttons = (props: PropsButtons) => {

    return(
        <button className={`${s.go} ${s.neGo}`} onClick={props.callBack}>{props.name}</button>
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

