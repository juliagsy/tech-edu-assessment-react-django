import React, {useState} from 'react';
import Directory from './components/Directory';
import View from './components/View';
import ContactForm from './components/ContactForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [retrieveSingle, setRetrieveSingle] = useState(false);
  const [contactId, setContactId] = useState(0);
  const [currentContact, setCurrentContact] = useState(null);

  const setSingleState = (single, id) => {
    setRetrieveSingle(single);
    setContactId(id);
  }

  const setFormState = (form, id, contact) => {
    setShowForm(form);
    setContactId(id);
    setCurrentContact(contact);
  }

  let single = retrieveSingle
                ? <View id={contactId} onStateChange={setSingleState} onFormChange={setFormState} />
                : <Directory onStateChange={setSingleState} onFormChange={setFormState} />

  let form = <ContactForm contact={currentContact} contactId={contactId} onFormChange={setFormState} />

  return (
    <div>
      { showForm ? form : single }
    </div>
  )
}

export default App;
