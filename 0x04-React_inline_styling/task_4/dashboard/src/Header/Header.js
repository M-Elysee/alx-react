import logo from './Holberton_logo.jpg';
import {StyleSheet, css} from "aphrodite"
import React from 'react';

const style = StyleSheet.create({
  appHeader: {
    display: "flex",
    width: "10vw",
    position: "absolute",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
  headerText: {
    display: "flex",
    color: "crimson",
    alignItems: "center",
  }
});
export default function header() {
    return (
      <div className={css(style.appHeader)}>
        <img src={logo} alt='Holbertonlogo' className={css(style.logo)} />
        <h1 className={css(style.headerText)}>School dashboard</h1>
      </div>
    );
}