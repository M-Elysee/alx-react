import logo from './Holberton_logo.jpg';
import {StyleSheet, css} from "aphrodite"
import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';

const style = StyleSheet.create({
  appHeader: {
    display: "flex",
    width: "100%",
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
  },
  log: {
    marginTop: "30px",
    marginLeft: "40px",
    display:"flex",
    '@media (max-width: 900px)': {
      paddingTop: "1rem",
      marginLeft: "0px",
      fontSize: ".6rem",
    },
  }
});
function Header() {
  const {user, logOut} = useContext(AppContext)
  return (
    <div className={css(style.appHeader)}>
      <img src={logo} alt='Holbertonlogo' className={css(style.logo)} />
      <h1 className={css(style.headerText)}>School dashboard</h1>
      {user.isLoggedIn && <section id='logoutSection' className={css(style.log)}>
      <p>Welcome <strong>{user.email}</strong> <em><p onClick={() => logOut}><strong>(logout)</strong></p></em></p>
      </section>}
    </div>
  );
}
export default Header;