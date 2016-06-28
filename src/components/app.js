import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	//app shows any children component
  render() {
    return (
      <div>
      	{this.props.children}
      </div>

    );
  }
}
