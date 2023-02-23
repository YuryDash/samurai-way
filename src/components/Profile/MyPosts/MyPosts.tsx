import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./MyPosts.module.css"
import {Buttons} from "./Posts/Buttons/Buttons";
import {updatePostAC} from "../../../redux/profile-reducer";

type PropsType = {
    makePosts: (text: string) => void
    newPostText: string
    dispatch: (action: any) => void
}
let text: string;

export const MyPosts = (props: PropsType) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        text = e.currentTarget.value
        console.log(text)
        props.dispatch(updatePostAC(text))
    }

    const onClickHandler = () => {
        if (text.trim() !== '') {
            props.makePosts(text.trim())
            console.log( text + ' PushButton or mouth')
        }
    }


    const OnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ?
        onClickHandler() : ''

    return (
        <div className={s.my__post}>
            <div className={s.newPostTitle}>NEW POST</div>
            <div className={s.newPost}>
                <input
                    maxLength={60}
                    value={props.newPostText}
                    onChange={onPostChangeHandler}
                    onKeyDown={OnKeyDownHandler}
                    className={s.inputArea}
                    placeholder={'New Posts'}
                    id="1">
                </input>

                <Buttons name={'Add Posts'} callBack={onClickHandler}/>

            </div>
        </div>
    );
}
