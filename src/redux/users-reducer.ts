export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type setNewUsersAT = ReturnType<typeof setNewUsersAC>
export type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type setTotalCountUsersAT = ReturnType<typeof setTotalCountUsersAC>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type toggleIsFollowingProgressAT = ReturnType<typeof toggleIsFollowingProgressAC>
export type UsersActionType =
    FollowAT
    | UnFollowAT
    | setNewUsersAT
    | setCurrentPageAT
    | setTotalCountUsersAT
    | toggleIsFetchingAT
    | toggleIsFollowingProgressAT

type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

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
    totalCount: number,
}
const initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 13,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {

        case"FOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }

        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }

        case"SET_NEW_USERS":
            return {...state, users: action.payload.newUsers}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.currentPage}

        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.payload.isFetching}

        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(el => el !== action.payload.userID)
            }

        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userID
        }
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userID
        }
    } as const
}

export const setNewUsersAC = (newUsers: UserType[]) => {
    return {
        type: "SET_NEW_USERS",
        payload: {
            newUsers
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}

export const setTotalCountUsersAC = (totalCount: number) => {
    return {
        type: "SET_TOTAL_COUNT",
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export const toggleIsFollowingProgressAC = (isFetching: boolean, userID: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        payload: {
            isFetching, userID
        }
    } as const
}