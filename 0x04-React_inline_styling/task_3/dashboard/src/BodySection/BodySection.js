import React, {Component} from "react";
import PropTypes from "prop-types";

const bodyStyle = {paddingLeft: "1rem"};
class BodySection extends Component {
    render() {
        const {title, children} = this.props;
        return (
          <div className="bodySection" style={bodyStyle}>
            <h2>{title}</h2>
            {children}
          </div>
        );
    }
}
BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default BodySection;