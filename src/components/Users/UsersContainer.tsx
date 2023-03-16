import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {followAC, setNewUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUser: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollowUser: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setNewUsers: (users: UserType[]) => {
            dispatch(setNewUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)