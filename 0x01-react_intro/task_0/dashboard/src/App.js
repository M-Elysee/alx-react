import logo from './Holberton_logo.jpg';
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
      </div>
      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
