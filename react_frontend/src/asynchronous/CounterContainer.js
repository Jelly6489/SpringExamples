import React, { Component } from "react";
import { connect } from 'react-redux'
import Counter from "./Counter";
import { increaseAsync, decreasewAsync } from "./counter";

class CounterContainer = ({ number, increaseAsync, decreasewAsync }){
    return(
        <Counter number = { number } onIncrease={ increaseAsync } onDecrease={ decreasewAsync}/>
    )
}

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreasewAsync
    }
) (CounterContainer)

