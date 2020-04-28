import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'krina'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'krina'
            })
        }, 2000)
    }

    render() {
        console.log('********** Parent comp render ******')
        return (
            <div>
                Parent Component
                {/*<RegComp name={this.state.name} />
                <PureComp name={this.state.name} />*/}
                <MemoComp />
            </div>
        )
    }
}

export default ParentComp