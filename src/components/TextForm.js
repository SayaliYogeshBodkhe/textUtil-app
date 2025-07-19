import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handlerUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
  };
  const handlerLowClick = () => {setText(text.toLowerCase())
     props.showAlert("Converted to Lowercase","success");
  };
  
  const handlerClrTextClick = () =>{ props.showAlert("Clear the Text","success");
  setText('');}
  const handlerCopyTextClick = () => navigator.clipboard.writeText(text);

  const handlerCutTextClick = () => {
    const textArea = document.getElementById('myBox');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = text.substring(start, end);
    const remainingText = text.substring(0, start) + text.substring(end);
    navigator.clipboard.writeText(selectedText);
    setText(remainingText);
     
  };

  const handlerPasteTextClick = async () => {
    try {
      const pastedText = await navigator.clipboard.readText();
      setText(text + pastedText);
    } catch (err) {
      alert("Failed to paste from clipboard.");
    }
  };

  const handlerRemoveSpaceClick = () => {
    let newText = text.trim().replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert("Remove the Text","success");    
  };

  const handleOnChange = (e) => setText(e.target.value);

  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const characters = text.replace(/\s/g, '').length;
  const readingTime = 0.008 * words;

  return (
    <div className="container my-3 p-4 rounded">
      <h1>{props.heading}</h1>

      <textarea
        className="form-control my-2"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{
    backgroundColor: props.mode === 'dark' ? '#4a4b53ff' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
        >

        </textarea>

      <div className="my-3">
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerUpClick}>Uppercase</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerLowClick}>Lowercase</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerClrTextClick}>Clear</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerCopyTextClick}>Copy</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerCutTextClick}>Cut</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerPasteTextClick}>Paste</button>
        <button className="btn btn-outline-primary mx-2 my-1" onClick={handlerRemoveSpaceClick}>Remove Spaces</button>
      </div>

      <h2 className="my-3">Text Summary</h2>
      <p>{words} words, {characters} characters</p>
      <p>{readingTime.toFixed(2)} Minutes Read</p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
  );
}
