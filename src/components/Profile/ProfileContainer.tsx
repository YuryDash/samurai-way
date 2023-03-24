import React from "react";
import s from "./Profile.module.css"
import {RootStateType} from "../../redux/store-redux";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileUsers, setUserProfileAC} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: ProfileUsers) => void
}

 export class ProfileContainer extends React.Component<PropsType, ProfileUsers> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`).then((response) => {
           this.props.setUserProfile(response.data)
            console.log(response.data)
        })
    }

    render() {

        return (
            <div className={s.my__data}>
                <Profile/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    console.log(state.profilePage.profile)
    return {
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(ProfileContainer)