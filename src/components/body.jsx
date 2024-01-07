import {React, useState} from 'react';
import memesgenerator from '../../memesgenerator';

const Body = () => {

    const [image, setImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
      });

      const [allMemeImages, setAllMemeImages] = React.useState(memesgenerator);

    const printRandomMemeUrl = () => {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomMemeUrl = memesArray[randomIndex].url;
        setImage((prevMeme) => ({
            ...prevMeme,
            randomImage: randomMemeUrl,
          }));
        console.log(randomMemeUrl);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
          ...prevMeme,
          [name]: value,
        }));
      };

    return (
            <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          placeholder="Top text"
          className="form--input"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="bottomText"
          value={image.bottomText}
          placeholder="Bottom text"
          className="form--input"
          onChange={handleInputChange}
        />
        <button className="form--button" onClick={printRandomMemeUrl}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={image.randomImage} className="meme--image" />
        <h2 className="meme--text top">{image.topText}</h2>
        <h2 className="meme--text bottom">{image.bottomText}</h2>
      </div>
    </main>
    );
};


export default Body;