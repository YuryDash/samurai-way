import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import {getUserProfile, getUserStatus, getUserUpdateStatus, ProfileUsersType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
     userID: string
}
type MapStateToPropsType = {
    profileState:  ProfileUsersType | null
    isAuth: boolean
    status: string
}
type MapDispatchToProps = {
    getUserProfile: (userID: number) => void
    getUserStatus: (userID: number) => void
    getUserUpdateStatus: ( status: string ) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


  class ProfileContainer extends React.Component<ProfileContainerPropsType>  {
    componentDidMount() {

        let userID = this.props.match.params.userID
        if(!userID && this.props.profileState){
            userID = '28543'
        }
        this.props.getUserProfile(+userID)
        this.props.getUserStatus(+userID)
    }


    render() {

    // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div className={s.my__data}>
                <Profile
                    {...this.props}
                    profileState={this.props.profileState}
                    getUserUpdateStatus={this.props.getUserUpdateStatus}
                    status={this.props.status}/>
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType) => {
    return {
        profileState: state.profilePage.profile,
        status: state.profilePage.status
    }
}
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus,getUserUpdateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
//withAuthRedirect

//1-ProfileContainer, 2-withRouter, 3-connect, 4-withAuthRedirect
