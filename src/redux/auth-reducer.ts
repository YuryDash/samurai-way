import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type setAuthUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type UsersActionType = setAuthUserDataAT

export type AuthDataType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: UsersActionType): AuthDataType => {
    switch (action.type) {
        case"SET_USER_DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}
export const setAuthUserDataAC = (id: string, login: string, email: string) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, login, email}
    } as const
}

export const authThunkCreator = () => async (dispatch: Dispatch) => {

    try {
        const res = await authAPI.me()
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setAuthUserDataAC(id, login, email))
        }
    } catch (e) {

    }


        // authAPI.userAuth()
        //     .then((response) => {
        //         if (response.data.resultCode === 0) {
        //             let {id, login, email} = response.data.data
        //             dispatch(setAuthUserDataAC(id, login, email))
        //         }
        //     })
}


// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
//     {withCredentials: true} ).then((response) => {
//     if (response.data.resultCode === 0) {
//         let {id, login, email} = response.data.data
//         this.props.setAuthUserDataAC(id, login, email)
//     }
// })