import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControl/FormControl';
import { loginTC } from '../../redux/auth-reducer';
import { RootStateType } from '../../redux/store-redux';
import { fieldRequired, maxLength30 } from '../../utils/validators/validators';
import { Buttons } from '../Profile/MyPosts/Posts/Buttons/Buttons';
import s from "./login.module.css";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}
type DispatchToPropsType = {
  loginTC: (login: string,
            password: string,
            rememberMe: boolean) => void
}
type MapStateToPropsType = {
  isAuth: boolean
}
type OwnPropsType = MapStateToPropsType & DispatchToPropsType

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

  console.log(props)
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[maxLength30,fieldRequired]}
          className={s.inputAreas}
          name={'login'}
          type="email"
          placeholder={'Login'}
          component={Input}
        />
      </div>
      <div>
        <Field
          className={`${s.inputAreas} ${s.padding}`}
          name={'password'}
          type="password"
          placeholder={'Password'}
          component={Input}
          validate={[maxLength30,fieldRequired]}
        />
      </div>
      <div>
        <label style={{fontFamily: "Cinzel"}}>
          <Field
            name={'rememberMe'}
            type="checkbox"
            component={Input}
          /> Remember Me
        </label>
      </div>
      {props.error && <div className={s.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <Buttons submit={'submit'} name={'Login'}/>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm<FormDataType>({
  form: "logins",
})(LoginForm)

const Login = (props: OwnPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData.login, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {loginTC})(Login)