import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../../redux/store-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        makePosts: (text: string) => {dispatch(addPostAC(text))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)