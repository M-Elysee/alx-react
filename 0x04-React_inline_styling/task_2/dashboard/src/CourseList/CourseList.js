import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import {StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
  table: {
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
  },
  th: {
    width: "80%",
    borderBottom: "1px solid #ddd",
  },
  td: {
    width: "80%",
  },
  tr: {
    "nth-child(2)": {textAlign: "left",}
  }, 
});
function CourseList({courses}) {
  return (
    <table id="CourseList" className={css(style.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {courses.length > 0 ? (
          courses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
