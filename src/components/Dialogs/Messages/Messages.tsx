import s from "../Dialogs.module.css";
import React from "react";
import {MessagesDataType} from "../../../App";


export function Messages  (props: MessagesDataType) {
    return (
        <div key={props.id} className={s.message}>{props.message}</div>
    )
}