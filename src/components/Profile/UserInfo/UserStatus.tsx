import React, {ChangeEvent, Component, KeyboardEvent} from "react";

type PropsType = {
    status: string
    getUserUpdateStatus: ( status: string ) =>void
}
type StateType = {
    editMode: boolean
    statusValue: string
}

export  class UserStatus extends Component<PropsType,StateType> {
    state:StateType = {
        editMode: false,
        statusValue: this.props.status
    }

    onDuobleClickHandle = () => {
         this.setState({editMode: true})
        console.log('onDuobleClickHandle work')
    }

    onBLurHandle = () => {
        this.setState({editMode: false})
        console.log('onBLurHandle work')
        this.props.getUserUpdateStatus( this.state.statusValue )
    }
    onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, statusValue: e.currentTarget.value})
        console.log('onBLurHandle work' + this.state.statusValue)

    }

    onKeyDownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        if( e.key === "Enter"){
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
                            value={this.props.status}
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
