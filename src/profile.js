import React, { Component } from 'react';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: this.props.id
    }
  }
  render() {
    return (
      <div class="profile"></div>
    )
  }
}
