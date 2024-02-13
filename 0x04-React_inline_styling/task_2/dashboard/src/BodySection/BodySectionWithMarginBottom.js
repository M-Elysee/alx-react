import React, {Component} from "react";
import BodySection from "./BodySection.js";
import { StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    }
});
class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className={css(style.bodySectionWithMargin)}>
                <BodySection {...this.props}/>
            </div>
        );
    }
}

export default BodySectionWithMarginBottom;