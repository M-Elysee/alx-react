import React, {PureComponent} from "react";
import closeIcon from "./close.svg";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import {StyleSheet, css} from "aphrodite";


const opacityAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1}
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)'},
  '66%': { transform: 'translateY(5px)'},
  '100%': { transform: 'translateY(0px)'},
};
const style = StyleSheet.create({
  Notifications: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(15px)",
    padding: "0rem 2rem",
    zIndex: "2",
    '@media (max-width: 900px)': {
      width: "100vw",
    },
  }, 
  "[data-type='default']": { color: "blue"},
  "[data-urgent]": {color: "red"},
  "[data-type='urgent']": { color: "red" },
  menuItem: {
    position: "absolute",
    top: "auto",
    right: "1rem",
    marginBottom: "2rem",
    ":hover": {
      cursor: 'pointer',
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  }
});

class Notifications extends PureComponent {

  render() {
    const { notifications, markNotificationAsRead, displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <React.Fragment>
        <div className={css(style.menuItem)} onClick={() => {handleDisplayDrawer()}}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(style.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "10px",
                top: "5px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={() => { handleHideDrawer()}}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {notifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {notifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {notifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={markNotificationAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
Notifications.propTypes = {
  markNotificationAsRead: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false, 
  notifications: [],
  markNotificationAsRead: () => {},
  handleHideDrawer: () => {},
  handleDisplayDrawer: () => {},
};

export default Notifications;