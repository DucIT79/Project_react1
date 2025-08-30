import React, { useState } from 'react'

export const Example = () => {
    const [count, setCount] = useState(10)
    const handle_count_down = () => {
        // setCount(count - 1)
        setCount(preState=>preState-1)
    }
    console.log("Render Example 1");
    return (

        <div>
            <h1>tim hieu ve useState</h1>
            <p>count:{count}</p>
            <button onClick={handle_count_down}>Count down</button>

        </div>
    )
}
