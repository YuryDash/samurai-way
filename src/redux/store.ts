export type DialogsType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsDataType = {
    dialogs: DialogsType[]
    messagesData: MessagesDataType[]
    newMessageBody: string
}
export type PostsType = {
    id: string
    text: string
}
export type PostsDataType = {
    posts: PostsType[]
    newPostsText: string
}
export type AppPropsType = {
    postsData: PostsDataType
    dialogsData: DialogsDataType
}
// export type StoreType = {
//     _state: AppPropsType
//     _callSubscriber: (state: AppPropsType) => void
//     subscribe: (observer: (state: AppPropsType) => void) => void
//     getState: () => AppPropsType
//     dispatch: (action: any) => void
// }

// export let store: StoreType = {
//     _state: {
//         postsData: {
//             posts: [],
//             newPostsText: ''
//         },
//
//         dialogsData: {
//             dialogs: [
//                 {id: v1(), name: 'Andrzej'},
//                 {id: v1(), name: 'Piotrek'},
//                 {id: v1(), name: 'Bartek'},
//                 {id: v1(), name: 'Franek'},
//                 {id: v1(), name: 'Marek'},
//                 {id: v1(), name: 'Adam'}
//             ],
//             messagesData: [
//                 {id: v1(), message: 'hi'},
//                 {id: v1(), message: 'Hello my friend'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo maan'},
//             ],
//             newMessageBody: ''
//         },
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     _callSubscriber() {
//         console.log('lol');
//     },
//
//     subscribe(observer: (state: AppPropsType) => void) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action: any) {
//         this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
//         this._state.postsData = profileReducer(this._state.postsData, action)
//         this._callSubscriber(this._state);
//     }
// }
//
//
//
// // @ts-ignore
// window.store = store