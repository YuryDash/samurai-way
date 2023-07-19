import {v1} from "uuid";

export  type DialogsDataType = {
    dialogs: DialogsType[]
    messagesData: MessagesDataType[]
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}

type SendMessageAT = ReturnType<typeof sendMessageAC>
type ActionType = SendMessageAT

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
}
export const dialogsReducer = (state: DialogsDataType = initialState, action: ActionType): DialogsDataType => {

    switch (action.type) {
        case "SEND_MESSAGE":
            let newMessage: MessagesDataType = {id: v1(), message: action.payload.body}
            return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state;
    }
}
export const sendMessageAC = (body: string) => {
    return {type: "SEND_MESSAGE", payload:{body}} as const
}