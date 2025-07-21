import React from 'react';

export default function Features(props) {
  const style = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#121212' : 'white',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div className="container" style={style}>
      <h1>Features</h1>
      <ul>
        <li>Convert text to Uppercase and Lowercase</li>
        <li>Remove extra spaces</li>
        <li>Copy, Cut, and Paste text easily</li>
        <li>Word and character count with reading time</li>
        <li>Dark and Light mode support</li>
      </ul>
    </div>
  );
}
