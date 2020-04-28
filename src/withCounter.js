import React from 'react'
// using HOC pattern which is used to shared common functionality using common function
const withCounter = (WrappedComponent, incrementNumber => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            console.log(this.props.name)
            return(
            <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {... this.props}
            />
        )}
    }
    return WithCounter
}

export default withCounter