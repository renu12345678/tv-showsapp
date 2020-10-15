import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import { Link } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';
import { MemoryRouter,BrowserRouter  } from 'react-router-dom'


configure({adapter: new Adapter()});
const props = {
    name: '',
    description: '',
    urlImage: '',
    stars: 0,
    genres: [],
    release_date: '',
    language: '',
    handleSearch: jest.fn()
}
const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<Navbar {...props}/>);
describe('Navbar', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('Menu')).not.toBe(null);
  });
  it('should render one <h1>', () => {
    const wrapper = mount(
      <BrowserRouter >
        <Navbar />
      </BrowserRouter >
    );
    expect(wrapper.find('h1').length).toBe(1);
  });
});
