import React from 'react';

function Edit(props) {
  const editContact = () => {
    props.onFormChange(true, props.id, props.contact[0])
  }

  return (
    <button onClick={editContact}>Edit this Contact</button>
  )
}

export default Edit;
