import React from 'react';
import './stylesheets/Contact.css';

function Contact(props) {
  const showContact = () => {
    props.onStateChange(true, props.id)
  }

  return (
    <button className='contact-button' onClick={showContact}>{props.name}</button>
  )
}

export default Contact;
