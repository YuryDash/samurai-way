import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {AuthDataType, authThunkCreator, setAuthUserDataAC} from "../../redux/auth-reducer";

type PropsType = {
    setAuthUserDataAC: (id: string, login: string, email: string) => void
    authUserData: AuthDataType,
    login: () => void
}

export class HeaderContainer extends React.Component<PropsType, AuthDataType> {

    componentDidMount() {
        this.props.login()
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
export const ConnectHeader = connect(mapStateToProps, {setAuthUserDataAC, login:authThunkCreator})(HeaderContainer)