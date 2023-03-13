import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


const rootReducer = combineReducers({
     profileReducer,
     dialogsReducer,
})


export const store = legacy_createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store