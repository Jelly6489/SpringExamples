import React, { Component } from "react";

class DefaultPropsTest extends Component {
    static defaultProps = {
        name: '일곱난쟁이'
    }
    render() {
        return(
            <div>
                Awesome Golang Based { this.props.name }
            </div>
        )
    }
}

export default DefaultPropsTest