import logo from './Holberton_logo.jpg';
import './Header.css';
import React from 'react';

export default function header() {
    return (
      <div className='App-header'>
        <img src={logo} alt='Holbertonlogo' className='logo' />
        <h1 className='header-text'>School dashboard</h1>
      </div>
    );
}