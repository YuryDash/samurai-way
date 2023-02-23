import {v1} from "uuid";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


type DialogsType = {
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
export type StoreType = {
    _state: AppPropsType
    _callSubscriber: (state: AppPropsType) => void
    subscribe: (observer: (state: AppPropsType) => void) => void
    getState: () => AppPropsType
    dispatch: (action: any) => void
}
// export const state: AppPropsType = {
//     postsData: {
//         posts: [],
//         newPostsText: ''
//     },
//     dialogsData: [
//         {id: v1(), name: 'Andrzej'},
//         {id: v1(), name: 'Piotrek'},
//         {id: v1(), name: 'Bartek'},
//         {id: v1(), name: 'Franek'},
//         {id: v1(), name: 'Marek'},
//         {id: v1(), name: 'Adam'},
//     ],
//     messagesData: [
//         {id: v1(), message: 'hi'},
//         {id: v1(), message: 'Hello my friend'},
//         {id: v1(), message: 'Yo'},
//         {id: v1(), message: 'Yo maan'},
//     ]
// }


export let store: StoreType = {
    _state: {
        postsData: {
            posts: [],
            newPostsText: ''
        },

        dialogsData: {
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
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('lol');
    },

    // addPost(postMessage: string) {
    //     let newPost = {id: v1(), text: postMessage};
    //     this._state.postsData.posts.push(newPost);
    //     this._state.postsData.newPostsText = '';
    //     this._callSubscriber(this._state)
    // },
    //
    // updatePostText(newPost: string) {
    //     store._state.postsData.newPostsText = newPost
    //     this._callSubscriber(this._state)
    // },
    subscribe(observer: (state: AppPropsType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {

        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._state.postsData = profileReducer(this._state.postsData, action)
        this._callSubscriber(this._state);

        switch (action.type) {
            case "ADD_POST":
                let newPost = {id: v1(), text: action.payload.text};
                this._state.postsData.posts.push(newPost);
                this._state.postsData.newPostsText = '';
                this._callSubscriber(this._state);
                break;

            case "UPDATE_NEW_POST_TEXT":
                store._state.postsData.newPostsText = action.payload.text;
                this._callSubscriber(this._state);
                break;

            case "UPDATE_NEW_MESSAGE_BODY":
                this._state.dialogsData.newMessageBody = action.payload.body
                this._callSubscriber(this._state);
                break;

            case "SEND_MESSAGE":
                const body = this._state.dialogsData.newMessageBody;
                const newMessage: MessagesDataType = {id: v1(), message: body}
                this._state.dialogsData.messagesData = [...this._state.dialogsData.messagesData, newMessage]
                this._state.dialogsData.newMessageBody = '';
                this._callSubscriber(this._state)
                break;

            default:
                break;
        }
    }
}



// @ts-ignore
window.store = store