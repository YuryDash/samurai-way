import {v1} from "uuid";
import {PostsType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostAT = ReturnType<typeof updatePostAC>
type setUserProfileAT = ReturnType<typeof setUserProfileAC>
type setStatusAT = ReturnType<typeof setStatusAC>

type ActionType = AddPostAT | UpdateNewPostAT | setUserProfileAT | setStatusAT

export type ProfileUsersType = {
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": string
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": string
        "github": string
        "mainLink": string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
}

export type PostsDataType = {
    posts: PostsType[]
    newPostsText: string
    profile: ProfileUsersType
    status:string
}

const initialState: PostsDataType = {
    posts: [{id: v1(), text: 'Starts'}],
    newPostsText: "",
    profile: {} as ProfileUsersType,
    status: ''
}

// profile && profile.
export const profileReducer = (state = initialState, action: ActionType): PostsDataType => {

    switch (action.type) {

        case "ADD_POST":
            let newPost: PostsType = {id: v1(), text: action.payload.text};
            return {...state, posts: [...state.posts, newPost], newPostsText: ''}

        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostsText: action.payload.text}

        case "SET_USER_PROFILE":
            return {...state, profile: action.payload.profile}

        case "SET_STATUS":
            return {...state, status: action.payload.status}
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

export const setUserProfileAC = (profile: ProfileUsersType) => {
    return {
        type: "SET_USER_PROFILE",
        payload: {
            profile
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

export const setStatusAC = (status: string) => {
    return {
        type:"SET_STATUS",
        payload: {
            status
        }
    }as const
}

export const getUserProfile = (userID: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userID).then((response) => {
        dispatch(setUserProfileAC(response.data))
    })
}

export const getUserStatus = (userID: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userID).then((response) => {
        dispatch(setStatusAC(response.data))
    }).catch( (e) => {
        console.error(e + 'this is catch in getUserUpdateStatus')
    } )
}
export const getUserUpdateStatus = (status: string) => (dispatch: Dispatch) => {

    profileAPI.updateStatus(status).then((response) => {
        console.log(response.data.resultCode + ': res data data')
        if(response.data.data.resultCode === 0){
            // dispatch(setStatusAC(response.data))
        }
    })
        .catch( (e) => {
            console.error(e + 'this is catch in getUserUpdateStatus')
        } )
}
