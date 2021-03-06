import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';

export class LoadInitialData extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      error: false
    }
  }
  render() {
    const { loaded, error } = this.state;
    return (
      <Main />
    )
  }
}

export default withRouter(connect(null, null)(LoadInitialData));
