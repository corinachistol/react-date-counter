import { useState } from 'react';

export default function Counter() {

    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

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
                <input type="range" min="1" max="10" onChange={(e)=>setStep(Number(e.target.value))} value={step} />
                <span>Step: {step}</span>
               
            </div>
            <div>
                <button onClick={decreaseCount}>-</button>
                <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
                <button onClick={increaseCount}>+</button>
            </div>
            <p>
                {count === 0 ? "Today is " 
                : count > 0 ? `${count} days from today is ` 
                : `${Math.abs(count)} days ago was `}{date.toDateString()} </p>
            {(count !==0 || step !== 1 ) && <div>
                <button onClick={()=>{setStep(1); setCount(0)}}>Reset</button>
            </div>}

        </div>
    )
}

