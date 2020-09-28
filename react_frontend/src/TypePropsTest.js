import React, { Component } from "react";
import PropTypes from 'prop-types'

class TypePropsTest extends Component {
    static defaultProps = {
        name: '독사과'
    }
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return(
            <div>
                Awesome Golang Based { this.props.name }
            </div>
        )
    }
}

export default TypePropsTest