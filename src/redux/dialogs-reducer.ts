import {v1} from "uuid";
import {DialogsDataType, MessagesDataType} from "./state";


type SendMessageAT = ReturnType<typeof sendMessageAC>
type UpdateMessageAT = ReturnType<typeof updateNewMessageBodyAC>
type ActionType = SendMessageAT | UpdateMessageAT

export const dialogsReducer = (state: DialogsDataType, action: ActionType): DialogsDataType => {

    switch (action.type) {

        case "UPDATE_NEW_MESSAGE_BODY":
            // return state.newMessageBody = action.payload.body
       return { ...state, newMessageBody: action.payload.body}

        case "SEND_MESSAGE":
            const body = state.newMessageBody;
            const newMessage: MessagesDataType = {id: v1(), message: body}
            state.newMessageBody = '';
            let messDataNeRabotaet = state.messagesData;
            return {...state, messagesData: [...messDataNeRabotaet, newMessage]}

        default:
            return state;
    }
}


export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        payload: {
            body
        }
    } as const
}
export const sendMessageAC = () => {
    return {type: "SEND_MESSAGE",} as const
}