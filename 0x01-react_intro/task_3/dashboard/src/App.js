import logo from './Holberton_logo.jpg';
import {getFullYear, getFooterCopy}  from  './utils';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} alt='Holbertonlogo' className='logo' />
        <h1 className='header-text'>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p className='body-text'>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className='submit' >OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
