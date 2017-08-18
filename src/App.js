import React, { Component } from 'react';
import { withRouter} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}
export default  withRouter(App);
