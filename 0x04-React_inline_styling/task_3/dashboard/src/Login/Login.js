import React from 'react';
import {StyleSheet, css} from "aphrodite";

const style = StyleSheet.create({
  appBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
    border: "2px solid brown",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: "2px solid black",
    padding: "15px",
  },
});

export default function Login(){
    return (
      <div className={css(style.appBody)}>
        <p className={css(style.bodyText)}>Login to access the full dashboard</p>
        <form action="" className={css(style.form)}>
          <div>
            <label for="email">Email:  </label>
            <input type="email" name="email" id="email" className={css(style.emailId)} />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" class={css(style.passwordId)} />
          </div>
          <button className={css(style.submit)} >OK</button>
        </form>
      </div>
    );
} 