import React, { Component } from "react";
import PropTypes from 'prop-types'

class ConstructorPropsTest extends Component {
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
                <p>ConstructorPropsTest name: { this.props.name }</p>
                <p>ConstructorPropsTest age: { this.props.age }</p>
                <p>ConstructorPropsTest Number: { this.props.number }</p>
            </div>
        )
    }
}

export default ConstructorPropsTest