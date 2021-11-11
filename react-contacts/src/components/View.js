import React, {useEffect, useState} from 'react';
import Delete from './Delete';
import Edit from './Edit';
import './stylesheets/View.css';

function View(props) {
  const [contact, setContact] = useState([]);

  function parseData(data) {
    data.forEach(rawContact => {
      setContact(prevState => [
        ...prevState,
        {
          id: rawContact.pk,
          name: rawContact.fields.name,
          number: rawContact.fields.number
        }
      ])
    })
  }

  useEffect(() => {
    fetch(`http://localhost:8000/contacts/${props.id}`)
        .then(response => response.json())
        .then(data => parseData(data))
  }, [props.id])

  const showAll = () => {
    props.onStateChange(false, 0);
  }

  return (
    <div className='view-container'>
      <h2> Contact Details </h2>
      {contact.map((details) =>
        <p className='view-desc' key={details.name}>
        <b>Name:</b> {details.name}
        <br/>
        <b>Phone Number:</b> {details.number}
        </p>
      )}
      <Delete id={props.id} onStateChange={props.onStateChange} />
      <Edit contact={contact} id={props.id} onFormChange={props.onFormChange} />
      <button className='view-button' onClick={showAll}>Back to All Contacts</button>
    </div>
  )
}

export default View;
