import React from 'react';
import './stylesheets/Create.css';

function Create(props) {

  const showButton = async () => {
    await props.onFormChange(true,0)
  }

  return (
    <div>
      <button className='create-button' onClick={showButton}>Add New Contact</button>
    </div>
  )
}

export default Create;
