import React from 'react';
import './Notifications.css';
import closeIcon from './logo.svg';
import { getLatestNotification } from './utils.js';

function display() {
    console.log('Close button has been clicked');
}
function CreateNotifElements() {
    return(
        <div className='Notifications'>
            <button style={{ position: 'absolute', top: '10px', right: '10px', fontFamily: 'Arial', margin: '5px'}} onClick={display()}>
                <img src={closeIcon} alt='close Icon'width="10px"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}
export default CreateNotifElements;