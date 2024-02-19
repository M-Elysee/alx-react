import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import React from 'react';

export default function Footer() {
    return (
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    );
}
