import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        onSendMessageClickCo: (textValue: string) => {
            dispatch(sendMessageAC(textValue))
        },
        onNewMessageChangeCo: (textValue: string) => {
            dispatch(updateNewMessageBodyAC(textValue))
        }
    }
}
// Первые скобки вызов коннект , а вторые вызов функции которую возвращает connect
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);