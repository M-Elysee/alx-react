import React from "react";
import "./Notifications.css";
import closeIcon from "./close.svg";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, notifications }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="flex-area">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="Notifications">
            {/* <p>Here is the list of notifications</p> */}
            <ul>
              {notifications && notifications.length > 0 ? (
                notifications.map(({ id, html, type, value }) => (
                  <>
                    <NotificationItem key={id} type={type} value={value} html={html} />
                  </>
                ))
              ) : (
                <div className="">
                  <NotificationItem value="No new notification for now" />
                  <button
                    style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                    aria-label="Close"
                    onClick={console.log("Close button has been clicked")}>
                      <img src={closeIcon} alt="closeIcon" width="10px" />
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
