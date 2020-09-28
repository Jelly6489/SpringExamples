import React, { Component } from "react";
import PropTypes from 'prop-types'

class NumberPropsTest extends Component {
    static defaultProps = {
        name: '독사과'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render() {
        return(
            <div>
                <p>NumberPropsTest name: { this.props.name }</p>
                <p>NumberPropsTest age: { this.props.age }</p>
            </div>
        )
    }
}

export default NumberPropsTest