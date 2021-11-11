import React from 'react';
import axios from 'axios';
import './stylesheets/ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    if (this.props.contactId !== 0) {
      const { name, number } = this.props.contact;
      this.setState({ name, number });
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()

    if (this.props.contactId === 0) {
      await axios.post('http://localhost:8000/contacts/',this.state)
                .then(() => this.props.onFormChange(false,0,null))
    } else {
      await axios.put(`http://localhost:8000/contacts/${this.props.contactId}`,this.state)
                .then(() => this.props.onFormChange(false,this.props.contactId,null))
    }

  }

  showAll() {
    this.props.onFormChange(false,0,null)
  }


  render() {
    let formFields =
      <form onSubmit={this.handleSubmit}>
        <label className='form-label'>Name </label>
        <input type='text' name='name' maxLength='200' value={this.state.name} onChange={this.handleChange} required></input>
        <br />
        <label className='form-label'>Number </label>
        <input type='text' name='number' maxLength='200' value={this.state.number} onChange={this.handleChange} required></input>
        <br />
        <button className='form-button' type='submit' name='action' value='submit'>Save Contact</button>
        <button className='form-button' onClick={this.showAll}>Back to All Contacts</button>
      </form>

    return (
      <div className='form-container'>
        <h2> Contact Form </h2>
        {formFields}
      </div>
    )
  }
}

export default ContactForm;
