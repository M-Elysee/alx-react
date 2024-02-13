import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  header: {
    backgroundColor: "#deb5b545",
  }
});
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr className={css(style.row)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(style.header)} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className= {css(style.header)}>{textFirstCell}</th>
            <th className={css(style.header)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(style.row)}>{textFirstCell}</td>
          <td className={css(style.row)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
