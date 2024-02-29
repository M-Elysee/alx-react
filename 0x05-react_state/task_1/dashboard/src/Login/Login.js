import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false, email: "", password: "", enableSubmit: false};
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkSubmitEnabled = this.checkSubmitEnabled.bind(this);
  }
  handleLoginSubmit(event) {
    this.setState({isLoggedIn: true});
    event.preventDefault();
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value}, this.checkSubmitEnabled);
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value}, this.checkSubmitEnabled);
  }
  checkSubmitEnabled() {
    const {email, password} = this.state;
    const enableSubmit = email.trim() !== "" && password.trim() !== "";
    this.setState({enableSubmit});
  }
  render() {
    return (
      <div className={css(style.appBody)}>
        <p className={css(style.bodyText)}>Login to access the full dashboard</p>
        <form action="" className={css(style.form)}>
          <div>
            <label for="email">Email:  </label>
            <input type="email" name="email" id="email" value={this.state.email} className={css(style.emailId)} onChange={this.handleChangeEmail} />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" value={this.state.password} className={css(style.passwordId)} onChange={this.handleChangePassword}/>
          </div>
          <input type="submit" className={css(style.submit)} value="Ok" onSubmit={this.handleLoginSubmit} disabled={!this.state.enableSubmit}/>
        </form>
      </div>
    );
  }
}
export default Login;