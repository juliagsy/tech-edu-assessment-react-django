import React from 'react';
import Cookies from 'js-cookie';

function Delete(props) {
  const csrftoken = Cookies.get('csrftoken');

  const deleteContact = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(props.id),
      credentials: 'include'
    };

    await fetch(`http://localhost:8000/contacts/${props.id}`, requestOptions)
          .then(response => response.json);

    props.onStateChange(false, 0);
  }

  return (
    <button onClick={deleteContact}>Delete this Contact</button>
  )
}

export default Delete;
