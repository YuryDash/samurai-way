import React, {ChangeEvent, Component, KeyboardEvent} from "react";

type PropsType = {
    status: string
    getUserUpdateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    statusValue: string
}

export class UserStatus extends Component<PropsType, StateType> {
    state: StateType = {
        editMode: false,
        statusValue: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({statusValue: this.props.status})
        }
        // console.log( prevProps, " :this is prevProps" )
        // console.log( this.props.status, " :this is props.status" )
    }

    onDuobleClickHandle = () => {
        this.setState({editMode: true})
    }
    onBLurHandle = () => {
        this.setState({editMode: false})
        this.props.getUserUpdateStatus(this.state.statusValue)
    }

    onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, statusValue: e.currentTarget.value})
    }

    onKeyDownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.onBLurHandle()
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ?
                        <div>
                            <span onDoubleClick={this.onDuobleClickHandle}>Status: {this.props.status}</span>
                        </div>
                        :
                        <div>
                            <input
                                name={'input'}
                                type={'text'}
                                value={this.state.statusValue}
                                autoFocus
                                onBlur={this.onBLurHandle}
                                onChange={this.onChangeHandle}
                                onKeyDown={this.onKeyDownHandle}
                            />
                        </div>
                }
            </div>
        )
    }
}
