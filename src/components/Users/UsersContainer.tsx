import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalCountUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {UsersCo} from "./UsersCo";
import React from "react";
import axios from "axios";

type PropsType = {
    users: UserType[]
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setNewUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component <PropsType, UserType[]> {
// на безе классовой компоненты создается обьект и взаимодействую дальше с этим обьектом
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
        })
    }
    render() {
        return <UsersCo
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}/>
    }
}

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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountUsersAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)