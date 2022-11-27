import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogItemProps = {
    name?: string
    id?: number
}
type MessageProps = {
    message: string
}

// type dialogsDataProps = Array<DialogItemProps>
const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = (props: DialogItemProps) => {

    let dialogsData = [
        {id: 1, name: 'Andrzej'},
        {id: 2, name: 'Piotrek'},
        {id: 3, name: 'Bartek'},
        {id: 4, name: 'Franek'},
        {id: 5, name: 'Marek'},
        {id: 6, name: 'Adam'},
    ]
    let dialogElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Hello my friend'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo maan'},
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