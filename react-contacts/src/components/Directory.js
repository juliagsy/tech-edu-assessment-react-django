import React, {useEffect, useState} from 'react';
import Contact from './Contact';
import Create from './Create';
import './stylesheets/Directory.css';

function Directory(props) {
  const [allcontacts, setAllContacts] = useState([]);

  function parseData(data) {
    data.forEach(contact => {
      setAllContacts(prevState => ([
        ...prevState,
        {
          id: contact.pk,
          name: contact.fields.name,
          number: contact.fields.number
        }
      ]))
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/contacts/')
        .then(response => response.json())
        .then(data => parseData(data))
  }, [])

  return (
    <div className='directory-container'>
      <h2> All Contacts </h2>
      <Create onFormChange={props.onFormChange} />
      <div className='contact-container'>
        {allcontacts.map((contact) =>
          <Contact {...contact} onStateChange={props.onStateChange} key={contact.id} />
        )}
      </div>
    </div>
  )
}

export default Directory;
