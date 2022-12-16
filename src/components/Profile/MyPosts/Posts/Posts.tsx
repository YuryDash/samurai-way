import React, {useState} from "react";
import s from "./Posts.module.css"
import {Buttons} from "./Buttons/Buttons";


type PropsMessType = {
    message: string
    id: string
    deletePost: (id: string) => void
}
export const Posts = (props: PropsMessType) => {
    //========================================
    let [like, setLike] = useState(0)

    const onClickHandlerL = () => {
        setLike(++like)
    }
    //================================================
    let [disLike, setDisLike] = useState(0)

    const onClickHandlerD = () => {
        setDisLike(++disLike)
    }
    const deletePostHandler = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={s.posts} >
            <div className={s.avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8f69N306YjlMvJTUad0Q5iwUU2SRfKa0aQ&usqp=CAU"
                    alt="ava"/>
                <div className={s.userName}>Escanor</div>
            </div>
            <div className={s.text}>{props.message}</div>
            <Buttons className={s.ditch} callBack={onClickHandlerD} name={`dislike: ` + disLike}/>
            <Buttons callBack={onClickHandlerL} name={`like: ` + like}/>
            <Buttons name={'delete post'} callBack={deletePostHandler}/>
        </div>
    )
}
