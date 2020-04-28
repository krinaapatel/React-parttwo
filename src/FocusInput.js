import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    clickHandler = () => {
        this.componentRef.current.FocusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input </button>
            </div>
        )
    }
}
export default FocusInput