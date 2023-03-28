import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {AuthDataType, setAuthUserDataAC} from "../../redux/auth-reducer";

type PropsType = {
    setAuthUserDataAC: (id: string, login: string, email: string) => void
    authUserData: AuthDataType
}

export class HeaderContainer extends React.Component<PropsType, AuthDataType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true} ).then((response) => {

            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserDataAC(id, login, email,)
            }
        })
    }
    render() {
        return (
            <Header authUserData={this.props.authUserData}/>
        );
    }
}
const mapStateToProps = (state: RootStateType) => {
    return {
        authUserData: state.auth
    }
}
export const ConnectHeader = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)