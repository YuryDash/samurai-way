import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {RootStateType} from "./store-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

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
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const setAuthUserDataAC = (loadingData: AuthDataType) => {
  let {id, login, email, isAuth} = loadingData
  return {
    type: "SET_USER_DATA",
    payload: {id, login, email, isAuth}
  } as const
}

export const authThunkCreator = () => async (dispatch: Dispatch) => {
  try {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
      let {id, login, email} = res.data.data
      dispatch(setAuthUserDataAC({id, login, email, isAuth: true}))
    }
  } catch (e) {
    console.log('error', e)
  }
}

export const loginTC = (
  email: string, password: string, rememberMe: boolean
) => async (dispatch: ThunkDispatch<RootStateType, unknown, AnyAction>) => {
  try {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
      dispatch(authThunkCreator())
    } else {
      let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some Error";
      dispatch(stopSubmit("logins", {_error: message}))
    }
  } catch (e) {
    console.log('error', e)
  }
}

export const logoutTC = () => async (dispatch: ThunkDispatch<RootStateType, unknown, AnyAction>) => {
  try {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserDataAC({id: null, login: null, email: null, isAuth: false}))
    } else {
      console.log('lol')
    }
  } catch (e) {
    console.log('error', e)
  }
}