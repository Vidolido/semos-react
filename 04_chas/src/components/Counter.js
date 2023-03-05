import {useState} from 'react';

export const Counter = () => {
    const [counterValue, setCounterValue] = useState(1)
    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }
    const decrementCounter = () => {
        setCounterValue(counterValue - 1)
    }
    const resetCounter = () => {
        setCounterValue(0)
    }

  return (
    <div>
        <h1>{counterValue}</h1>

        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Decrement</button>

    </div>
  )
}
