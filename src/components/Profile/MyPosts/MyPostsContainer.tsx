import React from "react";
import {updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    makePosts: (text: string) => void
    newPostText: string
    dispatch: (action: any) => void
}
export const MyPostsContainer = (props: PropsType) => {

    const makePostsCo = (text: string) => {
        props.makePosts(text)
    }

    const onChangeMyPosts = (currentValue: string) => {
        props.dispatch(updatePostAC(currentValue))
    }

    return (
        <MyPosts newPostText={props.newPostText} makePostsCo={makePostsCo} onChangeMyPosts={onChangeMyPosts}/>
    );
}
