import React, {useEffect, useState} from 'react';
import Contact from './Contact';

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
    <div>
      {allcontacts.map((contact) =>
        <Contact {...contact} onStateChange={props.onStateChange} key={contact.id} />
      )}
    </div>
  )
}

export default Directory;
