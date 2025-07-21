import React from 'react';

export default function Help(props) {
  const style = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#121212' : 'white',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div className="container" style={style}>
      <h1>Help</h1>
      <p>If you're having trouble using the app, here's what you can do:</p>
      <ul>
        <li>Make sure your browser allows clipboard access.</li>
        <li>Check for internet connectivity for updates.</li>
        <li>Click the dark/light mode toggle to change themes.</li>
        <li>If issues persist, contact support.</li>
      </ul>
    </div>
  );
}
