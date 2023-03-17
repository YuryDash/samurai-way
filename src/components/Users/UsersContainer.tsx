import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {followAC, setNewUsersAC, unFollowAC} from "../../redux/users-reducer";
import {UsersCo} from "./UsersCo";

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCo)