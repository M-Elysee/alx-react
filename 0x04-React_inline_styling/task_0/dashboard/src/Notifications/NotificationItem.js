import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, key, markAsRead, id } = this.props;
    return (
      <>
        {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }} ></li> : null}
        {type && value ? <li key={key} data-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
      </>
    );
}
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