import React from "react"

export default function App() {
    /**
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    const [count, setCount] = React.useState(0)
    
    const add = () => { 
        console.log (`${count + 1}`); 
        };
    
    return (
        <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick= {add}>+</button>
        </div>
    )
}
