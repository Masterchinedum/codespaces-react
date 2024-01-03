import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    const display = thingsArray.map(thing => <p> {thing} </p>)
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     * Done
     */
    
    return (
        <div>
            <button>Add Item</button>
            {{display}}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));