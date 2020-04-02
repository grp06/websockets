import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { message: ''}
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message
        })
      }).catch(e => {
        console.log('e = ', e)
      })
  }

  render() {
    const { message } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { process.env.NODE_ENV === 'production' ?
              <p>
                This is a production build from create-react-app.
              </p>
            : <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
          }
          <p>{'« '}<strong>
            { message}
          </strong>{' »'}</p>
        </header>
      </div>
    );

  }


}

export default App;
