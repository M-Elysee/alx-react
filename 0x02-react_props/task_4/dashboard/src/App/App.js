import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CreateNotifElements from '../Notifications/Notifications.js';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <CreateNotifElements/>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
