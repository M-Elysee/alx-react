import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("App renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("Notifications component is rendered", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });
  it("Header component is rendered", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("Login Component is rendered", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(false);
  });
  it("Footer component is rendered", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("courselist is not rendered when logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("courselist is rendered if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
});
