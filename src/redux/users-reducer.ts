export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type setNewUsersAT = ReturnType<typeof setNewUsersAC>
export type UsersActionType = FollowAT | UnFollowAT | setNewUsersAT
type UsersStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
export type UserType = {
    name: string
    id: number
    followed: boolean
    uniqueUrlName: string | null
    "photos": {
        small: null | string,
        large: null | string
    }
    "status": null,
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1
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
            console.log(action.payload.newUsers)
            return { ...state, users: [...state.users, ...action.payload.newUsers] }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
   return {
        type:"FOLLOW",
       payload: {
            userID
       }
    } as const
}

export const unFollowAC = (userID: number) => {
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