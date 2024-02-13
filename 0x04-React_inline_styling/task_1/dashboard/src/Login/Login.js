import React from 'react';
import {StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
  appBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "70%",
  },
  emailId: {
    width: "200px",
    margin: "10px",
  },
  passwordId: {
    width: "200px",
    margin: "10px",
  },
  submit: {
    width: "50px",
    marginTop: "10px",
  },
});

export default function Login(){
    return (
      <div className={css(style.appBody)}>
        <p className={css(style.bodyText)}>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" className={css(style.emailId)} />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class={css(style.passwordId)} />
        <button className={css(style.submit)} >OK</button>
      </div>
    );
} 