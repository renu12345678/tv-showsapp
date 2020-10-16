import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import { Link } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom'


configure({adapter: new Adapter()});

const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
describe('Navbar', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('Menu')).not.toBe(null);
  });
  it('should render one <h1>', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });
});
