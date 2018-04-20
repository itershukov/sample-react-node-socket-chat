import React from 'react';
import ReactDOM from 'react-dom';
import View from './index';
import renderer from 'react-test-renderer';
import { mount, render, shallow } from 'enzyme';
import { Button, Menu, Form } from 'antd';
const FormItem = Form.Item;

describe(`Base test <Home />`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<View />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe(`Snapshot <Home />`, () => {
  it('View should be the same', () => {
    const component = renderer.create(<View />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe(`<Home />`, () => {
  it('renders button', () => {
    const wrapper = mount(<View />);
    expect(wrapper.contains(Button)).toEqual(true);
  });

  it('renders only one button', () => {
    const wrapper = mount(<View />);
    const btns = wrapper.find(Button);
    expect(btns.length).toEqual(1);
  });

  it('renders header', () => {
    const wrapper = mount(<View />);
    expect(
      wrapper.contains(
        <p>Please enter your name as you want it to appear in the chat</p>
      )
    ).toEqual(true);
  });

  it('renders input', () => {
    const wrapper = mount(<View />);
    expect(wrapper.find(FormItem).length).toEqual(2);
  });

  it('logout is absent', () => {
    const wrapper = mount(<View />);
    expect(wrapper.find(Menu).length).toEqual(0);
  });

  it('submit empty form', () => {
    const wrapper = mount(<View />);

    let warning = wrapper.find('.ant-form-explain');

    expect(warning.length).toEqual(0);

    wrapper.find('button').simulate('submit');

    warning = wrapper.find('.ant-form-explain');

    expect(warning.length).toEqual(1);
  });
});
