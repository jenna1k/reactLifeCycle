import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Next extends Component {
  render() {
    return (
      <div>
        <h1>Nothing to show</h1>
        <Link to="/"> Back to homepage </Link>
      </div>
    )
  }
}