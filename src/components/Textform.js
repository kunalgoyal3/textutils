// import React, {useState} from 'react'
import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function Textform(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    SetText(newText);
    props.showAlertText("Success :- Converted into Uppercase");
  }
  const handleLowClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    SetText(newText);
    props.showAlertText("Success :- Converted into Lowercase");
  }
  const handleClearClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = " ";
    SetText(newText);
    props.showAlertText("Success :- Text is cleared");
  }
  const handleUpFirstClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.capitalize;
    SetText(newText);
  }
  const handleOnChange = (event) => {
    console.log("on change")
    SetText(event.target.value);
  }


  const [text, SetText] = useState('');
  // SetText("enter your text here");

  return (
    <>

      <div className="container my-4" >
        <div className={`form-group  text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
          <label htmlFor="exampleFormControlTextarea1"><b>{props.placehold}</b></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="7"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2 " onClick={handleUpClick} >{props.buttonText} </button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={handleLowClick}>Convert into LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
        {/* <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUpFirstClick}>Convert first letter</button> */}
      </div>

      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h2>Summary</h2>
        <div>total words are {text.split(' ').filter((element)=>{return element.length!==0}).length}</div>
        <div>total character are {text.length}</div>
        <div>Total time {0.008 * text.split(' ').length}</div>
      </div>
    </>
  );
}
