import React from 'react'
import { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                count: state.count + 1,
                mode: true
            }
        case "decrease":
            return {
                ...state,
                count: state.count - 1,
                mode: false
            }
        default:
            return state;
    }

}

const initial = {
    count: 0,
    mode: false
}


const Example = () => {

    const [state, dispatch] = useReducer(reducer, initial)

    function clickhandler() {
        dispatch({ type: 'increase' })
    }
    function negativeclickhandler() {
        dispatch({ type: 'decrease' })
    }
    console.log(state.mode)
    return (
        <div>

            <button onClick={clickhandler}>+</button>
            <span>{state.count}</span>
            <button onClick={negativeclickhandler}>-</button>
        </div>
    )
}

export default Example
