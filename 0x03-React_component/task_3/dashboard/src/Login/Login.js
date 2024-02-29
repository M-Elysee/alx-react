import './Login.css';
import React from 'react';

export default function Login(){
    return (
      <div className='App-body'>
        <p className='body-text'>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className='submit' >OK</button>
      </div>
    );
} 