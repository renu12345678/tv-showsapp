import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Showfilms from './Showfilms';


configure({adapter: new Adapter()});
const props = {
    gutter : "0 ",
    results:[],
    genre: '',
    isSearch: false,
    searchValue: '',
    handleSearch: jest.fn()
}
const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<Showfilms {...props}/>);
describe('Home', () => {

  it('should render the Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
    expect(wrapper.find('Row')).not.toBe(null);
    expect(wrapper.find('Col')).not.toBe(null);

  });

});