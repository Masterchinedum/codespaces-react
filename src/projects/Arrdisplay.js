import React, {useState} from 'react';
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
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  const addNewItem = () => {
    setThingsArray(prevThingsArray => {
      const newItem = `Thing ${prevThingsArray.length + 1}`;
      return [...prevThingsArray, newItem];
    });
  };

  const thingsElements = thingsArray.map(thing => (
    <p>{thing}</p>
  ));

  return (
    <div>
      <button onClick={addNewItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default Arrdisplay;
