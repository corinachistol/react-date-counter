import { useState } from 'react';

export default function Counter() {

    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    function decreaseStep() {
        setStep(s => s - 1)
    }

    function increaseStep() {
        setStep(s => s + 1)
    }

    function decreaseCount() {
        setCount(c => c - step)
    }

    function increaseCount() {
        setCount(c => c + step)
    }

    const date = new Date()
    date.setDate(date.getDate() + count)
    console.log(date)

    return (
        <div className='container'>
            <div>
                <button onClick={decreaseStep}>-</button>
                <span>Step: {step}</span>
                <button onClick={increaseStep}>+</button>
            </div>
            <div>
                <button onClick={decreaseCount}>-</button>
                <span>Count: {count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
            <p>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}{date.toDateString()} </p>

        </div>
    )
}

