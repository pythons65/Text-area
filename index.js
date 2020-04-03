import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TextArea from './textarea';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
/*<Hello name={this.state.name} />*/
  render() {
    return (
      <div>
    
        <TextArea></TextArea>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
