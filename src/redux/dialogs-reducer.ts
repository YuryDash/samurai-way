import {v1} from "uuid";
import {DialogsDataType, MessagesDataType} from "./store";

type SendMessageAT = ReturnType<typeof sendMessageAC>
type UpdateMessageAT = ReturnType<typeof updateNewMessageBodyAC>
type ActionType = SendMessageAT | UpdateMessageAT

const initialState:DialogsDataType = {
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