import React from "react";
import s from "./Header.module.css"
import avatar from "../../img/logo/LogoStart1.png"
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../redux/auth-reducer";

type HeaderPropsType = {
  authUserData: AuthDataType
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {
  return (
    <>
      <header className={s.header}>
        <img src={avatar} alt="just logo"/>
        <div className={s.login}>
          {
            props.authUserData.isAuth
              ? (
                <div className={s.block_logout}>
                  <div>Hello: {props.authUserData.login}</div>
                  <button onClick={props.logout}>Logout</button>
                </div>
              )
              : <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </header>
    </>
  );
}