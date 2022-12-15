import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Messages/Messages";
import {v1} from "uuid";

export type DialogItemProps = {
    name?: string
    id?: string
}
export type MessageProps = {
    message: string
}





export const Dialogs = (props: DialogItemProps) => {

    let dialogsData = [
        {id: v1(), name: 'Andrzej'},
        {id: v1(), name: 'Piotrek'},
        {id: v1(), name: 'Bartek'},
        {id: v1(), name: 'Franek'},
        {id: v1(), name: 'Marek'},
        {id: v1(), name: 'Adam'},
    ]
    let dialogElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesData = [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'Hello my friend'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo maan'},
    ]
    let messageElements = messagesData.map(el => <Message message={el.message}/>)

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