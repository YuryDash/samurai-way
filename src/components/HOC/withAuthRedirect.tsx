import { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { RootStateType } from "../../redux/store-redux"

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth : state.auth.isAuth
    }
}
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    debugger
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if(isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}