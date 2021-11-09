import React from 'react';

function Contact(props) {
  const showContact = () => {
    props.onStateChange(true, props.id)
  }
  
  return (
    <div>
      <button onClick={showContact}>{props.name}</button>
    </div>
  )
}

export default Contact;
