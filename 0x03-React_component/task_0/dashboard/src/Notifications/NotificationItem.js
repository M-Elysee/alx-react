import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? <li data-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
    </>
  );
}
NotificationItem.defaultProps = {
  type: "default",
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export default NotificationItem;