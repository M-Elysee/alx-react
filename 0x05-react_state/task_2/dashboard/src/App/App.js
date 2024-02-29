import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import React, {Component } from 'react';
import CourseList from "../CourseList/CourseList.js";
import { getLatestNotification } from "../utils/utils.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js"
import BodySection from "../BodySection/BodySection.js";
import { StyleSheet, css} from "aphrodite";
import {user, AppContext} from "./AppContext";

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
const style = StyleSheet.create({
  App: {
    width: '100%',
    height: '100%',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
  },
  headingSection: {
    display: 'flex',
    height: '10rem',
    borderBottom: '3px solid crimson',
    justifyContent: 'space-between',
    overflow: 'visible',
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { displayDrawer: false, user: user, logOut: this.logOut() };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true}});
  }
  logOut() {
    this.setState({user});
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false});
  }
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true});
  }
  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  render() {
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut }}>
        <React.Fragment>
          <div className={css(style.App)}>
            <div className={css(style.headingSection)}>
              <Header />
              <Notifications notifications={notifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
            </div>
            {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={courses} />
            </BodySectionWithMarginBottom>
            ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>)
            }
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
                iste vero dolor voluptates.
              </p>
            </BodySection>
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
