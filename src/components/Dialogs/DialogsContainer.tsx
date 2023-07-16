import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {DialogPropsType, Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
        // isAuth: state.auth.isAuth
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
// type TypeForThisFuckinCode = AuthPropsType & DialogPropsType

// let AuthRedirectComponent = withAuthRedirect(Dialogs<TypeForThisFuckinCode>);
// Первые скобки вызов коннект , а вторые вызов функции которую возвращает connect
const DialogWithAuthRedirect = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogWithAuthRedirect);
