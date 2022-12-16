import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsDataType, MessagesDataType} from "../../App";

type DialogPropsType = {
    messagesData:MessagesDataType[]
    dialogsData:DialogsDataType[]
}

export function Dialogs (props: DialogPropsType) {

    let dialogElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messageElements = props.messagesData.map(el => <Messages id={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}