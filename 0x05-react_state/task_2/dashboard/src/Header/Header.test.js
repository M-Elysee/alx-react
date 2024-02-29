import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("Header tests", () => {
  it("Header renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("h1 tag is rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});
