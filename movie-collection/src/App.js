import React, { Component } from 'react';
import Main from './main';
import Header from './components/common/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
