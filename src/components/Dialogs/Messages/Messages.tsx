import s from "../Dialogs.module.css";
import React from "react";
import {MessageProps} from "../Dialogs";


export function Message  (props: MessageProps) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}