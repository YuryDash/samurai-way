import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import axios from "axios";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {Profile} from "./Profile";
import {connect} from "react-redux";

// nvm для ноды изменение версии
//
// type PropsType = {
//     setUserProfile: (profile: ProfileUsersType) => void
//     profileState: ProfileUsersType
// }

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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID ).then((response) => {
           this.props.setUserProfile(response.data)
        })
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
export const ProfileContainerWrapper = connect(mapStateToProps, {setUserProfile:setUserProfileAC})(WithUrlDataContainer)

