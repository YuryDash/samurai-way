import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {followAC, setNewUsersAC, unFollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUser: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowUser: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setNewUsers: (users: any) => {
            dispatch(setNewUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)