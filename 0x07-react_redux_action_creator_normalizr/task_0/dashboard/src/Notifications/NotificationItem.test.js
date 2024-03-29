import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("NotificationItem tests", () => {
  it("rendering NotificationItem component", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('rendering the correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ type: "default", value: "test" });

    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('rendering the correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: "<u>test</u>" });

    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});