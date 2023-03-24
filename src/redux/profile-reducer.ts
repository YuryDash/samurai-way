import {v1} from "uuid";
import {PostsType} from "./store";

type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostAT = ReturnType<typeof updatePostAC>
type setUserProfileAT = ReturnType<typeof setUserProfileAC>
type ActionType = AddPostAT | UpdateNewPostAT | setUserProfileAT

export type ProfileUsers = {
    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": null | string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}

export type PostsDataType = {
    posts: PostsType[]
    newPostsText: string
    profile: ProfileUsers | null
}

const initialState: PostsDataType = {

    posts: [{id: v1(), text: 'Starts'}],
    newPostsText: "",
    profile: null

}
export const profileReducer = (state  = initialState, action: ActionType): PostsDataType => {

    switch (action.type) {
        case "ADD_POST":
            let newPost: PostsType = {id: v1(), text: action.payload.text};
            return {...state, posts: [...state.posts, newPost], newPostsText: ''}

        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostsText: action.payload.text}

        case "SET_USER_PROFILE":
            return {...state, profile: action.payload.profile}

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

export const setUserProfileAC = (profile: ProfileUsers) => {
    return {
        type: "SET_USER_PROFILE",
        payload: {
            profile
        }
    } as const
}