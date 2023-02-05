import {v1} from "uuid";
import {AppPropsType} from "../App";

export let state: AppPropsType = {
    postsData: [
        {id: v1(), text: 'hi how are u?'},
        {id: v1(), text: 'u?'},
    ],
    dialogsData: [
        {id: v1(), name: 'Andrzej'},
        {id: v1(), name: 'Piotrek'},
        {id: v1(), name: 'Bartek'},
        {id: v1(), name: 'Franek'},
        {id: v1(), name: 'Marek'},
        {id: v1(), name: 'Adam'},
    ],
    messagesData: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'Hello my friend'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo maan'},
    ]
}
export let addPost = (postMessage: string)=> {
    let newPost = {id: v1(), text: postMessage}
    state.postsData.push(newPost)
}