import React from 'react';
import './stylesheets/Edit.css';

function Edit(props) {
  const editContact = () => {
    props.onFormChange(true, props.id, props.contact[0])
  }

  return (
    <button className='edit-button' onClick={editContact}>Edit this Contact</button>
  )
}

export default Edit;
