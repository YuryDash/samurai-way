import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {RootStateType} from '../../redux/store-redux';

type PropsType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<PropsType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} type="text" placeholder={'Login'} component={'input'}/>
      </div>
      <div>
        <Field name={'password'} type="password" placeholder={'Password'} component={'input'}/>
      </div>
      <div>
        <label><Field name={'rememberMe '} type="checkbox" component={'input'}/> Remember Me</label>
      </div>
      <div>
        <button type={'submit'}>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm<PropsType>({
  form: "logins",
})(LoginForm)

export const Login = () => {
  const onSubmit = (formData: PropsType) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login ne Bledin</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}