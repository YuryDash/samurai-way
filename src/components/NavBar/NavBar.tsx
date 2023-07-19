import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import { DialogsType } from "../../redux/dialogs-reducer";
//задал переменую класса актив
let active = s.active;

type PropsType = {
    friendsName: DialogsType[]
}

export const NavBar = (props: PropsType) => {

    let threeBestFriends = props.friendsName.map( el => el.name ).slice(0, 3)
    // let threeBestFriends = props.friendsName.map( el => el.dialogs.map( el => el.name ) ).slice(0, 3)
    let path = "/dialogs/" + props.friendsName.map( el => el.id ).slice(0, 3)

    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/users">Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(isActive) => isActive ? active : ''} to="/settings">Settings</NavLink>
                </div>

                <div className={s.bestFriends}>
                    Best Friends
                </div>

                <div className={s.friends}>
                    <NavLink className={s.friends__item} to={path}>
                        <div className={s.friends__avatar}>{threeBestFriends[0].slice(0,1)}</div>
                        <div className={s.friends__name}>{threeBestFriends[0]}</div>
                    </NavLink>
                    <NavLink className={s.friends__item} to={path}>
                        <div className={s.friends__avatar}>{threeBestFriends[1].slice(0,1)}</div>
                        <div className={s.friends__name}>{threeBestFriends[1]}</div>
                    </NavLink>
                    <NavLink className={s.friends__item} to={path}>
                        <div className={s.friends__avatar}>{threeBestFriends[2].slice(0,1)}</div>
                        <div className={s.friends__name}>{threeBestFriends[2]}</div>
                    </NavLink>
                </div>
            </nav>

        </>
    )
}