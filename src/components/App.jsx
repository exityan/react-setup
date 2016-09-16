import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ul>
          <li><Link to="/signin">SignIn</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

