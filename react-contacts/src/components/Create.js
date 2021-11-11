import React from 'react';
import './stylesheets/Create.css';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.showButton = this.showButton.bind(this);
  }

  showButton() {
    this.props.onFormChange(true,0)
  }

  render() {
    return (
      <div>
        <button className='create-button' onClick={this.showButton}>Add New Contact</button>
      </div>
    )
  }
}

export default Create;
