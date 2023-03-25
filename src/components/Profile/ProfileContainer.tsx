import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileUsersType, setUserProfileAC} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: ProfileUsersType) => void
    profileState: ProfileUsersType
}

  class ProfileContainer extends React.Component<PropsType, ProfileUsersType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`).then((response) => {
           this.props.setUserProfile(response.data)

        })
    }

    render() {

        return (
            <div className={s.my__data}>
                <Profile profileState={this.props.profileState} />
            </div>

        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        profileState: state.profilePage.profile
    }
}

 // let WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(ProfileContainer)