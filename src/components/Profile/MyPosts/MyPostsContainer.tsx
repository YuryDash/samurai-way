
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {Action, Dispatch} from "redux";
import {PostsDataType} from "../../../redux/store";

// type PropsType = {
//     makePosts: (text: string) => void
//     newPostText: string
//     dispatch: (action: any) => void
// }
// export const MyPostsContainer = (props: PropsType) => {
//
//     return (
//         // <MyPosts newPostText={props.newPostText} makePostsCo={makePostsCo} onChangeMyPosts={onChangeMyPosts}/>
//         //передает стор напрямую
//         // Внутри клбэк который принимает стор (store) => <MyPost>
//         //(Можно передать что угодно от начала в Index.tsx)
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const makePostsCo = (text: string) => {
//                         props.makePosts(text)
//                     }
//
//                     const onChangeMyPosts = (currentValue: string) => {
//                         props.dispatch(updatePostAC(currentValue))
//                     }
//                     return (<MyPosts
//                         onChangeMyPosts={onChangeMyPosts}
//                         makePostsCo={makePostsCo}
//                         newPostText={store.getState().profileReducer.newPostsText}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state: PostsDataType) => {
    return {
        newPostText: state.newPostsText,
        posts: state.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onChangeMyPosts: (currentValue: string) => {dispatch(updatePostAC(currentValue))},
        makePostsCo: (text: string) => {dispatch(addPostAC(text))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)