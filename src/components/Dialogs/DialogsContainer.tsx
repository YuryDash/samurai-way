import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messagesData: state.dialogsReducer.messagesData,
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        onSendMessageClickCo: (textValue: string) => {dispatch(sendMessageAC(textValue))},
        onNewMessageChangeCo: (textValue: string) => {
            dispatch(updateNewMessageBodyAC(textValue))
        }
    }
}
// Первые скобки вызов коннект , а вторые вызов функции которую возвращает connect
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);