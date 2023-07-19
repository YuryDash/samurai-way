import {sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../redux/store-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messagesData: state.dialogsPage.messagesData,
    // newMessageBody: state.dialogsPage.newMessageBody,
  }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSendMessage: (textValue: string) => {
      dispatch(sendMessageAC(textValue))
    },
    // onNewMessageChangeCo: (textValue: string) => {
    //     dispatch(updateNewMessageBodyAC(textValue))
    // }
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs<TypeForThisFuckinCode>);
// Первые скобки вызов коннект , а вторые вызов функции которую возвращает connect
// const DialogWithAuthRedirect = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogWithAuthRedirect);
