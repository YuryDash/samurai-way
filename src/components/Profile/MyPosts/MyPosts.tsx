import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import {Buttons} from "./Posts/Buttons/Buttons";
import {PostsType} from "../../../redux/store";
import {Posts} from "./Posts/Posts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {fieldRequired, maxLengthCreator} from "../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControl/FormControl";

type PropsType = {
  makePosts: (text: string) => void
  posts: PostsType[]
}

type DataFormType = {
  postMessage: string
}

let text: string;

export const MyPosts = (props: PropsType) => {
  const mapPostsData = props.posts.map((el: any) => <Posts key={el.id} message={el.text} id={el.id}/>)

  const sendPost = (values: DataFormType) => {
    props.makePosts(values.postMessage)
  }
  return (
    <div className={s.my__post}>
      <div className={s.newPostTitle}>NEW POST</div>
      <div className={s.newPost}>
        <MessageFormRedux onSubmit={sendPost}/>
      </div>
      <div>
        {mapPostsData}
      </div>
    </div>
  );
}

const maxlength10 = maxLengthCreator(10)

const PostMessage: React.FC<InjectedFormProps<DataFormType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'postMessage'}
        type={'text'}
        component={Textarea}
        maxLength={60}
        className={s.inputArea}
        placeholder={'My Posts'}
        validate={[fieldRequired, maxlength10]}
      />
      <Buttons submit={'submit'} name={'Add Posts'}/>
    </form>
  )
}


const MessageFormRedux = reduxForm<DataFormType>({
  form: "postMessageForm"
})(PostMessage)