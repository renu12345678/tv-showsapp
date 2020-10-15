import React from 'react';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({adapter: new Adapter()});

let wrapped = shallow(<App/>);
describe('App', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});