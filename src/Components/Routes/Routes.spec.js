import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import { Link } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Routes from './Routes';
import { MemoryRouter } from 'react-router-dom'


configure({adapter: new Adapter()});

const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<MemoryRouter><Routes /></MemoryRouter>);
describe('Routes', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('Switch')).not.toBe(null);
  });

});
