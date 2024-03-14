import React, {useState} from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
    border: "1px solid grey",
  },
  header: {
    backgroundColor: "#deb5b545",
    border: "1px solid grey",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
    border: "1px solid grey",
  }
});
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(!checked);
  };
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
          <td className={checked? css(style.rowChecked) : css(style.row)}><input type="checkbox" onChange={handleCheckChange}/>{textFirstCell}</td>
          <td className={checked? css(style.rowChecked) : css(style.row)}>{textSecondCell}</td>
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
