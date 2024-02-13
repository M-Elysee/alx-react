import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite"

const style = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  }
});
class NotificationItem extends PureComponent {
  constructor(props){
    super(props);
    this.typeSelect = this.props.type === 'default'? css(style.default) : css(style.urgent);
  }
  render() {
    const { type, html, value, key, markAsRead, id } = this.props;
    return (
      <>
        {html ? <li onClick={() => markAsRead(id)} className={css(style.urgent)} dangerouslySetInnerHTML={{ __html: html }} ></li> : null}
        {type && value ? <li key={key} className={this.typeSelect} onClick={() => markAsRead(id)}>{value}</li> : null}
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