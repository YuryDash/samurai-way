import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogItemProps = {
    name?: string
    id?:number
}
type MessageProps = {
    message: string
}

// type dialogsDataProps = Array<DialogItemProps>
const DialogItem = (props:DialogItemProps) => {
    let path = "/dialogs/" + props.id

    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = (props:DialogItemProps) => {

    // let dialogsData = [
    //     {id: 1, name: 'Andrzej'},
    //     {id: 2, name: 'Piotrek'},
    //     {id: 3, name: 'Bartek'},
    //     {id: 4, name: 'Franek'},
    //     {id: 5, name: 'Marek'},
    //     {id: 6, name: 'Adam'},
    // ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Andrzej" id={1}/>
                <DialogItem name="Piotrek" id={2}/>
                <DialogItem name="Bartek" id={3}/>
                <DialogItem name="Franek" id={4}/>
                <DialogItem name="Marek" id={5}/>
                <DialogItem name="Adam" id={6}/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello my friend"/>
                <Message message="Yo"/>
                <Message message="Hiliu"/>
            </div>
        </div>
    );
}