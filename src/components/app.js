import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	react simple starter
      	{this.props.children}
      </div>

    );
  }
}
