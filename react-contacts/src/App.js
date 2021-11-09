import React from 'react';
import ReactDOM from 'react-dom';
import Directory from './components/Directory';
import View from './components/View';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      retrieveSingle: false,
      contactId: 0
    };

    this.setSingleState = this.setSingleState.bind(this);
  }

  setSingleState(single, id) {
    this.setState({retrieveSingle: single});
    this.setState({contactId: id});
  }

  render() {
    return (
      <div>
        {
          this.state.retrieveSingle
          ? <View id={this.state.contactId} onStateChange={this.setSingleState} />
          : <Directory onStateChange={this.setSingleState}/>
        }
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
