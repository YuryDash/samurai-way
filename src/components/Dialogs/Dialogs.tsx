import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {StoreType} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogPropsType = {
    // messagesData: MessagesDataType[]
    // dialogsData: DialogsDataType[]
    // newMessageBody: string
    store: StoreType
}


export function Dialogs(props: DialogPropsType) {

    let dialogElements = props.store.getState().dialogsData.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageElements = props.store.getState().dialogsData.messagesData.map(el => <Messages key={el.id} id={el.id} message={el.message}/>)
    let newMessageBody = props.store.getState().dialogsData.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
         props.store.dispatch(updateNewMessageBodyAC(body))
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
                              value={newMessageBody}
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