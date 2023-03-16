import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../../redux/store-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.profilePage.newPostsText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeMyPosts: (currentValue: string) => {dispatch(updatePostAC(currentValue))},
        makePostsCo: (text: string) => {dispatch(addPostAC(text))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)