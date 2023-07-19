import s from "../Dialogs.module.css";
import React from "react";
import { MessagesDataType } from "../../../redux/dialogs-reducer";


export function DialogMessages(props: MessagesDataType) {

    return (
      <div key={props.id} className={s.message}>{props.message}</div>
    )
}