import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
     profilePage:profileReducer,
     dialogsPage: dialogsReducer,
     usersPage: usersReducer,
     auth: authReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store