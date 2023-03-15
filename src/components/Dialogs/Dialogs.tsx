import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {DialogMessages} from "./DialogMessages/DialogMessages";
import {DialogsType, MessagesDataType} from "../../redux/store";

type DialogPropsType = {

    dialogs:  DialogsType[]
    messagesData: MessagesDataType[]
    newMessageBody: string

    onSendMessageClickCo: (body: string) => void
    onNewMessageChangeCo: (textValue: string) => void

}
export function Dialogs(props: DialogPropsType) {

    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    // let dialogElements = props.dialogsData.dialogsReducer.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageElements = props.messagesData.map(el => <DialogMessages key={el.id} id={el.id}
                                                                                   message={el.message}/>)
    const onSendMessageClick = () => {
        if (props.newMessageBody.trim() !== ''){
            props.onSendMessageClickCo(props.newMessageBody)
        }
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let textValue = e.currentTarget.value
        props.onNewMessageChangeCo(textValue)
    }
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    <div>{messageElements}</div>
                </div>
            </div>
            <div>
                <div>
                    <textarea placeholder={'Enter your message'}
                              value={props.newMessageBody}
                              onChange={onNewMessageChange}
                    >
                            </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </>
    );
}