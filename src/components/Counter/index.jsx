import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3 data-testid="counter">{counter}</h3>
            <button onClick={() => setCounter(prev => prev+1)}>Increment</button>
            <button onClick={() => setCounter(prev => prev-1)}>Decrement</button>
        </div>
    );
}

export default Counter