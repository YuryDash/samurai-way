import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {
    followAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalCountUsersAC,
    toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

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
    toggleIsFollowingProgress: (toggleBoo: boolean) => void
    BooValueForButtonsDisabled: boolean
}


export class UsersContainer extends React.Component <PropsType, UserType[]> {
// на безе классовой компоненты создается обьект и взаимодействую дальше с этим обьектом
    componentDidMount() {
        this.props.toggleIsFetching(true)

        //отделили DAL от UI и вынесли в отдельный файл
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setNewUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        // &count=${this.props.pageSize}`, {
        //     withCredentials: true
        // })
        //отделили DAL от UI и вынесли в отдельный файл

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setNewUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        BooValueForButtonsDisabled={this.props.BooValueForButtonsDisabled}
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
        BooValueForButtonsDisabled: state.usersPage.followingInProgress
    }
}
// connect создает колбэк followUser которая вызывает ActionCreator
export let UserContainerConnect = connect(mapStateToProps, {
    followUser: followAC,
    unFollowUser: unFollowAC,
    setNewUsers: setNewUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalCountUsersAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFollowingProgress: toggleIsFollowingProgressAC,
})(UsersContainer)