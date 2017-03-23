import React, { PropTypes } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
