import s from "../Dialogs.module.css";
import React from "react";
import {DialogItemProps} from "../Dialogs";
import {NavLink} from "react-router-dom";


export function DialogItem(props: DialogItemProps) {
        let path = "/dialogs/" + props.id

        return (
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>


    )
}