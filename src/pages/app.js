import React from 'react';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
          <div>
            React Redux starter
            {this.props.children}
          </div>
        );
    }
}

export default App;
