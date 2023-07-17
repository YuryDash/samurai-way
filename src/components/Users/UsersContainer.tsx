import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    unFollowThunkCreator,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

type PropsType = {
    users: UserType[]
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsers: ( currentPage: number, pageSize: number ) => void
}


class UsersContainer extends React.Component <PropsType, UserType[]> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        followThunkCreator={this.props.followThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        followingInProgress={this.props.followingInProgress}
                    />}
            </>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// connect создает колбэк followUser которая вызывает ActionCreator
let UserContainerConnect = connect(mapStateToProps, {
    followThunkCreator: followThunkCreator,
    unFollowThunkCreator: unFollowThunkCreator,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator
})(UsersContainer)
export default compose<React.FC>(
    withAuthRedirect,
    connect(mapStateToProps, {
        followThunkCreator: followThunkCreator,
        unFollowThunkCreator: unFollowThunkCreator,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersThunkCreator
    })
)(UsersContainer)


