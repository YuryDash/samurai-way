import {ComponentType, ReactNode} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {RootStateType} from "../../redux/store-redux"

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T extends object>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        console.log('isAuth: ',isAuth )
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}