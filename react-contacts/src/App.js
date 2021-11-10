import React from 'react';
import ReactDOM from 'react-dom';
import Directory from './components/Directory';
import View from './components/View';
import ContactForm from './components/ContactForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      retrieveSingle: false,
      contactId: 0,
      currentContact: null
    };

    this.setSingleState = this.setSingleState.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  setSingleState(single, id) {
    this.setState({retrieveSingle: single});
    this.setState({contactId: id});
  }

  setFormState(form, id, contact) {
    this.setState({showForm: form});
    this.setState({contactId: id});
    this.setState({currentContact: contact})
  }

  render() {
    let single = this.state.retrieveSingle
                  ? <View id={this.state.contactId} onStateChange={this.setSingleState} onFormChange={this.setFormState} />
                  : <Directory onStateChange={this.setSingleState} onFormChange={this.setFormState} />

    let form = <ContactForm contact={this.state.currentContact} contactId={this.state.contactId} onFormChange={this.setFormState} />

    return (
      <div>
        {
          this.state.showForm
          ? form
          : single
        }
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
