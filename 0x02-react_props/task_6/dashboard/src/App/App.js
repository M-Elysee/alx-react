import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";


const courses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const notifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Notifications notifications={notifications} />
          <Header />
        </div>
        {isLoggedIn ? <CourseList Courses={courses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
