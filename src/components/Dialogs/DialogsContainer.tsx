import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsDataType} from "../../redux/store";
import {Action, Dispatch} from "redux";

let mapStateToProps = (state: DialogsDataType) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onSendMessageClickCo: () => {dispatch(sendMessageAC())},
        onNewMessageChangeCo: (textValue: string) => {dispatch(updateNewMessageBodyAC(textValue))}
    }
}
// Первые скобки вызов коннект , а вторые вызов функции которую возвращает connect
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);