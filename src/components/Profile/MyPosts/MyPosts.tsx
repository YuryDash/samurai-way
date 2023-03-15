import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import {Buttons} from "./Posts/Buttons/Buttons";
// import {useSelector} from "react-redux";
// import {RootStateType} from "../../../redux/store-redux";
import {PostsType} from "../../../redux/store";
import {Posts} from "./Posts/Posts";

type PropsType = {
    newPostText: string
    makePostsCo: (text: string) => void
    onChangeMyPosts: (currentValue: string) => void
    posts: PostsType[]
}
let text: string;

export const MyPosts = (props: PropsType) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        text = e.currentTarget.value
        props.onChangeMyPosts(text)
    }

    const onClickHandler = () => {
        if (props.newPostText.trim() !== '') {
            props.makePostsCo(props.newPostText.trim())
            text = ''
        }
    }


    const OnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ?
        onClickHandler() : ''

    // const posts = useSelector<RootStateType, PostsType[]>((state) => state.profileReducer.posts)
    // const mapPostsData = posts.map((el: any) => <Posts key={el.id} message={el.text} id={el.id}/>)
    // рефактор на ЮзСЕЛЕКТОР от саппорта!!!!!!
    const mapPostsData = props.posts.map((el: any) => <Posts key={el.id} message={el.text} id={el.id}/>)

    return (
        <div className={s.my__post}>
            <div className={s.newPostTitle}>NEW POST</div>
            <div className={s.newPost}>
                <input
                    maxLength={60}
                    value={props.newPostText}
                    onChange={onPostChangeHandler}
                    onKeyDown={OnKeyDownHandler}
                    className={s.inputArea}
                    placeholder={'My Posts'}
                    id="1">
                </input>
                <Buttons name={'Add Posts'} callBack={onClickHandler}/>
            </div>
            <div>
                {mapPostsData}
            </div>
        </div>
    );
}

//
// import React, {ChangeEvent, KeyboardEvent} from "react";
// import s from "./MyPosts.module.css"
// import {Buttons} from "./Posts/Buttons/Buttons";
//
// type PropsType = {
//     newPostText: string
//     makePostsCo: (text: string) => void
//     onChangeMyPosts: (currentValue: string) => void
// }
// let text: string;
//
// export const MyPosts = (props: PropsType) => {
//
//     const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         text = e.currentTarget.value
//         props.onChangeMyPosts(text)
//     }
//
//     const onClickHandler = () => {
//         if (text.trim() !== '') {
//             props.makePostsCo(text.trim())
//             text = ''
//         }
//     }
//
//
//     const OnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ?
//         onClickHandler() : ''
//
//     return (
//         <div className={s.my__post}>
//             <div className={s.newPostTitle}>NEW POST</div>
//             <div className={s.newPost}>
//                 <input
//                     maxLength={60}
//                     value={props.newPostText}
//                     onChange={onPostChangeHandler}
//                     onKeyDown={OnKeyDownHandler}
//                     className={s.inputArea}
//                     placeholder={'My Posts'}
//                     id="1">
//                 </input>
//
//                 <Buttons name={'Add Posts'} callBack={onClickHandler}/>
//
//             </div>
//         </div>
//     );
// }

