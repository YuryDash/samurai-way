import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {Profile} from "./Profile";
import {connect} from "react-redux";

type PathParamsType = {
    userId: string
}
// type OwnPropsType = RouteComponentProps<PathParamsType> & PropsTyp
type OwnPropsType = RouteComponentProps<PathParamsType> & any


  class ProfileContainer extends React.Component<OwnPropsType>  {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID = 28543
        }
        this.props.getUserProfile(userID)
    }

    render() {

        return (
            <div className={s.my__data}>
                <Profile profileState={this.props.profileState}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        profileState: state.profilePage.profile
    }
}
export const WithUrlDataContainer = withRouter(ProfileContainer)
export const ProfileContainerWrapper = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainer)

