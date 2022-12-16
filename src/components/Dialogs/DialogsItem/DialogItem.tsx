import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../App";


export function DialogItem(props: DialogsDataType) {
        let path = "/dialogs/" + props.id

        return (
            <div className={s.dialog}>
                <div className={s.avatar}>{props.name[0]}</div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}