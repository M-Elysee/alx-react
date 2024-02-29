import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({courses}) {
  return (
    <table id="CourseList">
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
