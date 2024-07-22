import React, { useState } from 'react';

export default function TextUtiles(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleLoClick = () => {
    let Ntext = text.toLowerCase();
    setText(Ntext);
  };

  const handleOnClick = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='head' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="Tform">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnClick}
            style={{ background: props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'dark' ? 'white' : '#042743' }} // Fixed here
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className=" mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className=" mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className=" mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="mx-2">Copy</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').filter((element)=>{
          return element.length!==0}).length} words and {text.length} is the length of
          text
        </p>
 
  <p>{0.008 * text.split(" ").filter((element)=>{
          return element.length!==0}).length} Minutes read.</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter something in the textbox"}</p>
</div>
</>
)
}