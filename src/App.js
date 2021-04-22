import React from 'react';
import ReactDOM from 'react-dom';
import logo from './technomic6.png';
import './App.css';

import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <MessengerCustomerChat pageId="101249441233215" appId="3664419150244134"/>,
    </div>
  );
}

export default App;
