import {v1} from "uuid";

export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type setNewUsersAT = ReturnType<typeof setNewUsersAC>
export type UsersActionType = FollowAT | UnFollowAT | setNewUsersAT
type UsersStateType = {
    users: UserType[]
}
export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
const initialState: UsersStateType = {
    users: [
        {id: v1(), followed: true, fullName: "Snickers", status: "I'm a boss", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), followed: true, fullName: "Hottabych", status: "I'm a boss", location: {city: "Minsk", country: "Cyprus"}},
        {id: v1(), followed: false, fullName: "Saske", status: "I'm a boss", location: {city: "Minsk", country: "Tbilisi"}},
        {id: v1(), followed: true, fullName: "ALADDIN-BLEEET", status: "I'm a boss", location: {city: "Minsk", country: "KNDR"}},
    ]
}

export const usersReducer = (state = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case"FOLLOW":
        return {...state,
            users: state.users.map( el => el.id === action.payload.userID ? {...el , followed: true} : el )
        }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( el => el.id === action.payload.userID ? {...el , followed: false} : el )
            }
        case"SET_NEW_USERS":
            return { ...state, users: [...state.users, ...action.payload.newUsers] }
        default:
            return state
    }
}

export const followAC = (userID: string) => {
   return {
        type:"FOLLOW",
       payload: {
            userID
       }
    } as const
}

export const unFollowAC = (userID: string) => {
    return {
        type:"UNFOLLOW",
        payload: {
            userID
        }
    } as const
}
export const setNewUsersAC = (newUsers: UserType[]) => {
    return {
        type:"SET_NEW_USERS",
        payload: {
            newUsers
        }
    } as const
}