import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {
    followAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalCountUsersAC,
    toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {UsersCo} from "./UsersCo";
import React from "react";
import axios from "axios";
import {Preloader} from "../../common/preloader/Preloader";

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
    isFetching: boolean
    toggleIsFetching: (toggleValue: boolean) => void
}



 export class UsersContainer extends React.Component <PropsType, UserType[]> {
// на безе классовой компоненты создается обьект и взаимодействую дальше с этим обьектом
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then((response) => {

            this.props.setNewUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then((response) => {

            this.props.setNewUsers(response.data.items)
            this.props.toggleIsFetching(false)

        })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <UsersCo
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
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
        isFetching: state.usersPage.isFetching

    }
}

{/*const mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        toggleIsFetching: (toggleValue: boolean) => {
            dispatch(toggleIsFetchingAC(toggleValue))
        },
    }
}*/}

export let UserContainerConnect =  connect(mapStateToProps, {
    followUser: followAC,
    unFollowUser: unFollowAC,
    setNewUsers: setNewUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalCountUsersAC,
    toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer)