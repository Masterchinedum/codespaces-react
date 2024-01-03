import React from 'react';
import './Arrdisplay.css';

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

function Arrdisplay() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    let clickEvent = () => {
            newthing = `Thing ${thingsArray.length + 1}`;
            thingsArray.push(newthing);
            console.log(thingsArray);
    };
    return (
        <div>
            <button onClick={clickEvent}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default Arrdisplay;