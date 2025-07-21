import React from 'react';

export default function Contact(props) {
  const style = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#121212' : 'white',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div className="container" style={style}>
      <h1>Contact Us</h1>
      <p>Email: support@textutils.com</p>
      <p>Phone: +91-123-456-7890</p>
      <p>Address: Pune, Maharashtra, India</p>
    </div>
  );
}
