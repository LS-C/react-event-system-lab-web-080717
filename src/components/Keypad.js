// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    }
  }

  handleKeyUp = (e) => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} value="" type="password"/>
      </div>
    )
  }
}
