import {v1} from "uuid";
import {PostsDataType, PostsType} from "./store";


type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostAT = ReturnType<typeof updatePostAC>
type ActionType = AddPostAT | UpdateNewPostAT

const initialState: PostsDataType = {
    posts: [{id: v1(), text: 'Starts'}],
    newPostsText: ''
}

export const profileReducer = (state: PostsDataType = initialState, action: ActionType): PostsDataType => {

    switch (action.type) {
        case "ADD_POST":
            let newPost: PostsType = {id: v1(), text: action.payload.text};
            let postsNeDestrukturiruetsia = [...state.posts]
            state.newPostsText = '';
            return {...state, posts: [newPost, ...postsNeDestrukturiruetsia]}

        case "UPDATE_NEW_POST_TEXT":
            // state.newPostsText = action.payload.text;
            return {...state, newPostsText: action.payload.text}
        default:
            return state
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
        type: "UPDATE_NEW_POST_TEXT",
        payload: {
            text
        }
    } as const
}