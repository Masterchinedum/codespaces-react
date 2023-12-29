import React from 'react';

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
            <div> <button className="form-buttom" type="submit">Get a new meme image</button> </div> 
        </div>
    );
};

export default Body;