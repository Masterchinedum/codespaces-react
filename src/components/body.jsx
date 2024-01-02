import {React, useState} from 'react';
import memesgenerator from '../../memesgenerator';

const Body = () => {

    const [image, setImage] = useState('');
    const printRandomMemeUrl = () => {
        const memesArray = memesgenerator.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomMemeUrl = memesArray[randomIndex].url;
        setImage(randomMemeUrl);
        console.log(randomMemeUrl);
    };

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
            <div className= 'btncont' > <button className="form-buttom" onClick={printRandomMemeUrl}>Get a new meme image</button> </div>
            <div className="meme-image-cont"> 
                <img className="meme-image" src={image} alt="" />
            </div>
        </div>
    );
};


export default Body;