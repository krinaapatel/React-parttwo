import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            // step 3 consume the context value
            <UserConsumer>
                {
                    (username) => {
                        return <div> Hello {username}</div> 
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF