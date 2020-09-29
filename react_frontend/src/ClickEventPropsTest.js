import React, { Component } from "react";
import PropTypes from 'prop-types'

class ClickEventPropsTest extends Component {
    static defaultProps = {
        name: '독사과'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    render() {
        return(
            <div>
                <p>ClickEventPropsTest name: { this.props.name }</p>
                <p>ClickEventPropsTest age: { this.props.age }</p>
                <p>ClickEventPropsTest Number: { this.state.number }</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Plus Button</button>
            </div>
        )
    }
}

export default ClickEventPropsTest