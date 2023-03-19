import {v1} from "uuid";
import {DialogsDataType, MessagesDataType} from "./store";

type SendMessageAT = ReturnType<typeof sendMessageAC>
type UpdateMessageAT = ReturnType<typeof updateNewMessageBodyAC>
type ActionType = SendMessageAT | UpdateMessageAT

const initialState: DialogsDataType = {
    dialogs: [
        {id: v1(), name: 'Andrzej'},
        {id: v1(), name: 'Piotrek'},
        {id: v1(), name: 'Bartek'},
        {id: v1(), name: 'Franek'},
        {id: v1(), name: 'Marek'},
        {id: v1(), name: 'Adam'}
    ],
    messagesData: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'Hello my friend'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo maan'},
    ],
    newMessageBody: ''
}
export const dialogsReducer = (state: DialogsDataType = initialState, action: ActionType): DialogsDataType => {

    switch (action.type) {
        case "SEND_MESSAGE":
            let newMessage: MessagesDataType = {id: v1(), message: action.payload.body}
            console.log(newMessage.message)
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageBody: ""}

        case "UPDATE_NEW_MESSAGE_BODY":
            return {...state, newMessageBody: action.payload.body}

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
export const sendMessageAC = (body: string) => {
    return {type: "SEND_MESSAGE", payload:{body}} as const
}