import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {AuthDataType, authThunkCreator, logOutTC, setAuthUserDataAC} from "../../redux/auth-reducer";

type PropsType = {
  setAuthUserDataAC: (dataLoading: AuthDataType) => void
  authUserData: AuthDataType,
  login: () => void
  logout: () => void
}

export class HeaderContainer extends React.Component<PropsType, AuthDataType> {

  render() {
    return (
      <Header authUserData={this.props.authUserData} logout={this.props.logout}/>
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    authUserData: state.auth
  }
}
export const ConnectHeader = connect(
  mapStateToProps,
  {
    setAuthUserDataAC,
    login: authThunkCreator,
    logout: logOutTC,
  })(HeaderContainer)