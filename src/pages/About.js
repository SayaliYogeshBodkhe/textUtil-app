import React from 'react';

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#121212' : 'white',
    
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About TextUtils</h1>
      <p>This app helps you analyze and manipulate text quickly using React.</p>
      <ul>
        <li>Uppercase/Lowercase conversion</li>
        <li>Text Copy/Cut/Paste</li>
        <li>Word/Character count</li>
        <li>Dark/Light mode support</li>
      </ul>
    </div>
  );
}
