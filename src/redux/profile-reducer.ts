import {v1} from "uuid";
import {PostsDataType, PostsType} from "./state";


type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostAT = ReturnType<typeof updatePostAC>
type ActionType = AddPostAT | UpdateNewPostAT

export const profileReducer = (state: PostsDataType, action: ActionType): PostsDataType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostsType = {id: v1(), text: action.payload.text};
            state.newPostsText = '';
            let postsNeDestrukturiruetsia = state.posts
           return {...state, posts:[newPost, ...postsNeDestrukturiruetsia]}

        case "UPDATE_NEW_POST_TEXT":
            // state.newPostsText = action.payload.text;
            return {...state, newPostsText: action.payload.text}

    }
}

export const addPostAC = (text: string) => {
    return {
        type: "ADD_POST",
        payload: {
            text
        }
    } as const
}

export const updatePostAC = (text: string) => {
    return {
        type:"UPDATE_NEW_POST_TEXT",
        payload: {
            text
        }
    } as const
}