import React, {useEffect, useState} from 'react';
import Delete from './Delete';

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
    <div>
      {contact.map((details) =>
        <p>
        {details.name}
        <br/>
        {details.number}
        </p>
      )}
      <Delete id={props.id} onStateChange={props.onStateChange} />
      <button onClick={showAll}>Back to All Contacts</button>
    </div>
  )
}

export default View;
