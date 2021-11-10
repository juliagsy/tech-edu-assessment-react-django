import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()

    await axios.post('http://localhost:8000/contacts/',this.state)
              .then(() => this.props.onFormChange(false,0))
  }


  render() {
    let formFields =
      <form onSubmit={this.handleSubmit}>
        <label>Name </label>
        <input type='text' name='name' maxLength='200' value={this.state.name} onChange={this.handleChange} required></input>
        <label>Number </label>
        <input type='text' name='number' maxLength='200' value={this.state.number} onChange={this.handleChange} required></input>
        <button type='submit' name='action' value='submit'>Create Contact</button>
      </form>

    return (
      <div>
        {formFields}
      </div>
    )
  }
}

export default ContactForm;
