/* eslint-disable no-const-assign */
import {useState } from 'react'

function Counter() {
    const [counter , setCounter] = useState(0)

    let addvalue = () => {
        // eslint-disable-next-line no-const-assign
        setCounter((counter) => counter + 1) /// Here counter acts as value of previous counter
    }
    const Decvalue = () => setCounter(counter - 1)

    return (
        <>
            <h3>Counter value:-{counter} </h3>
            <button onClick={addvalue }>Add value</button><br/>
            <button onClick={Decvalue}>Decrease value</button>
        </>
    )
}
export default Counter