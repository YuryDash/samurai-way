import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogItem";
import {DialogMessages} from "./DialogMessages/DialogMessages";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsType, MessagesDataType} from "../../redux/dialogs-reducer";
import { Input } from "../../common/FormsControl/FormControl";

export type DialogPropsType = {
    dialogs: DialogsType[]
    messagesData: MessagesDataType[]
    onSendMessage: (body: string) => void
}
type DataFormType = {
    newMessageBody: string
}

export function Dialogs(props: DialogPropsType) {
    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messageElements = props.messagesData.map(el => <DialogMessages key={el.id} id={el.id} message={el.message}/>)

    const addNewMessage = (values: DataFormType) => {
        props.onSendMessage(values.newMessageBody)
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
            <MessageFormRedux onSubmit={addNewMessage}/>
        </>
    );
}

const MessageForm: React.FC<InjectedFormProps<DataFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
              type={'text'}
              component={Input}
              name={'newMessageBody'}
              placeholder={'Enter your message'}
              className={s.inputArea}
            />
        </div>
        <div>
            <button type={'submit'}>Send</button>
        </div>
    </form>
}

const MessageFormRedux = reduxForm<DataFormType>({
    form: "dialogMessageForm"
})(MessageForm)



