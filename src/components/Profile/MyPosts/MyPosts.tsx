import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import {Buttons} from "./Posts/Buttons/Buttons";

type PropsType = {
    newPostText: string
    makePostsCo: (text: string) => void
    onChangeMyPosts: (currentValue: string) => void
}
let text: string;

export const MyPosts = (props: PropsType) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        text = e.currentTarget.value
        props.onChangeMyPosts(text)
    }

    const onClickHandler = () => {
        if (text.trim() !== '') {
            props.makePostsCo(text.trim())
            text = ''
        }
    }


    const OnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ?
        onClickHandler() : ''

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

