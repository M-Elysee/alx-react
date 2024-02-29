import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("Login tests", () => {
  it("Rendering login component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("having 2 labels and 2 inputs", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("verify that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    wrapper.find("#email").simulate('change', {target: {value: 't'}});
    wrapper.find("#password").simulate('change', {target: {value: 't'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});
