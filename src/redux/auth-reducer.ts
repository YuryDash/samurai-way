

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
        return {
            ...state,
            ...action.payload,
            isAuth: true
        }
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