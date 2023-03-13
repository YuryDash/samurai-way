import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../../redux/store-redux";

type DialogsContainerPropsType = {
    state: RootStateType
    dispatch: (action: any)=> void
}

export function DialogsContainer(props: DialogsContainerPropsType) {

    const onSendMessageClickCo = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChangeCo = (textValue: string) => {
         props.dispatch(updateNewMessageBodyAC(textValue))
    }


    return (
        <Dialogs
            dialogsData={props.state.dialogsReducer}
            onSendMessageClickCo={onSendMessageClickCo}
            onNewMessageChangeCo={onNewMessageChangeCo}
        />
     );
}