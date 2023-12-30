import React from 'react';
import memesgenerator from '../../memesgenerator';

const Body = () => {

    

    return (
        <div className="text-field-cont">
            <form className="text-field">
                <div className="top-textcont">
                    <label className="top-text-lab">Top text</label>
                    <input type="text" className="top-text" placeholder="Shut up" />
                </div>
                <div className="bottom-textcont">
                    <label className="bottom-text-lab">Bottom text</label>
                    <input type="text" className="bottom-text" placeholder="And take my money" />
                </div>
            </form>
            <div className= 'btncont'> <button className="form-buttom" type="submit">Get a new meme image</button> </div> 
        </div>
    );
};
const printRandomMemeUrl = () => {
    const randomIndex = Math.floor(Math.random() * memesgenerator.length);
    const randomMemeUrl = memesgenerator[randomIndex];
    console.log(randomMemeUrl);
};

export default Body;