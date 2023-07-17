import React, {Component} from "react";

type PropsType = {
    status: string
}
type StateType = {
    editMode: boolean
}

export  class UserStatus extends Component<PropsType,StateType> {
    state:StateType = {
        editMode: false
    }

    onDuobleClickHandle = () => {
         this.setState({editMode: true})
    }

    onBLurHandle = () => {
        this.setState({editMode: false})
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
                        <input name={'input'} type={'text'} value={this.props.status} autoFocus onBlur={this.onBLurHandle}/>
                    </div>
            }
        </div>
        )
        console.log(this.state.editMode, 'editMode')
    }
}
