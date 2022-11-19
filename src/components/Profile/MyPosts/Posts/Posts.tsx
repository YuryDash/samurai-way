import React, {useState} from "react";
import s from "./Posts.module.css"
import {ButtonsLike, ButtonsDislike} from "./Buttons/Buttons";

type PropsMessType = {
    message: string
}



export const Posts = (props: PropsMessType) => {
    //========================================

  const  onClickHandlerL = () => {
        setLike(like++)
    }
    let [like, setLike] = useState(0)
    //================================================
    let [disLike, setDisLike] = useState(0)
   const onClickHandlerD = () => {
        setDisLike(disLike++)
    }
    return (
        <div className={s.posts}>
            <div className={s.avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8f69N306YjlMvJTUad0Q5iwUU2SRfKa0aQ&usqp=CAU"
                    alt="ava"/>
                <div className={s.userName}>Escanor</div>
            </div>
            <div className={s.text}>{props.message}</div>
            <ButtonsLike onClick={onClickHandlerL} likes={like}/>
            <ButtonsDislike onClick={onClickHandlerD} disLikes={disLike}/>
        </div>
    )
}
