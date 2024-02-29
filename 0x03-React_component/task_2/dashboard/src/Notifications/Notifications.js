import React, {Component} from "react";
import "./Notifications.css";
import closeIcon from "./close.svg";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, notifications } = this.props;
    return (
      <React.Fragment>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className="Notifications">
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
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {notifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {notifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {notifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={idx} />;
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  notifications: [],
};

export default Notifications;
