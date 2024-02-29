import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import React, {useContext} from 'react';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  const { user } = useContext(AppContext);
    return (
      <div className='App-footer'>
        {user.isLoggedIn && <p><button>Contact us</button></p>}
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    );
}
