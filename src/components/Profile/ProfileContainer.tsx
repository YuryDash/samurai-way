import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import {getUserProfile, ProfileUsersType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

// type PathParamsType = {
//     userID: string
// }
// type MapStateToPropsType = {
//     profileState:  ProfileUsersType | null
//     getUserProfile: (userID: number) => void
// }
// type OwnPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType

type PathParamsType = {
     userID: string
}
type MapStateToPropsType = {
    profileState:  ProfileUsersType | null
    isAuth: boolean
}
type MapDispatchToProps = {
    getUserProfile: (userID: number) => void
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
    }


    render() {

    // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div className={s.my__data}>
                <Profile {...this.props} profileState={this.props.profileState}/>
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType) => {
    return {
        profileState: state.profilePage.profile,
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainer))
//withAuthRedirect