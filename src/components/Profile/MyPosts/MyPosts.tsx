import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import {Buttons} from "./Posts/Buttons/Buttons";
import {v1} from "uuid";

type PropsArrType = {
    id: string
    text: string
}
type PropsType = {
    postsData: PropsArrType[]
    makePosts: (text: string) => void
}

export const MyPosts = (props: PropsType) => {

    const [newPost, setNewPost] = useState('');

    const onClickHandler = () => {
        if (newPost!==''){
            props.makePosts(newPost.trim())
            setNewPost('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPost(e.currentTarget.value)
    }
    const OnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ?
        onClickHandler() : ''


    return (
        <div className={s.my__post}>
            <div className={s.newPostTitle}>NEW POST</div>
            <div className={s.newPost}>
                <input
                    value={newPost}
                    onChange={onChangeHandler}
                    onKeyDown={OnKeyDownHandler}
                    className={s.inputArea}
                    placeholder={'New Posts'}
                    id="1">
                </input>

                <Buttons name={ 'Add Posts' } callBack={onClickHandler}/>

            </div>
        </div>
    );
}