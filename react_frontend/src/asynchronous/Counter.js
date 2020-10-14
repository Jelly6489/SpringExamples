// Counter class
import React from "react";
// memo는 데이터 처리를 더 빨리 하기 위함
class Counter = React.memo(({ number, onIncrease, onDecrease }) => {
    return(
        <div>
            <h1>{ number }</h1>
            <div>
                <button onClick={ onIncrease }>+1</button>
                <button onClick={ onDecrease }>-1</button>
            </div>
        </div>
    )
})

export default Counter

