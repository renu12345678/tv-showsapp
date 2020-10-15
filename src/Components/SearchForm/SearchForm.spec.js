import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from './SearchForm';


configure({adapter: new Adapter()});
const props = {
    gutter : "0 ",
    justify :"center-around",
    genre: '',
    isSearch: false,
    searchValue: '',
    handleSearch: jest.fn()
}
const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<SearchForm {...props}/>);
describe('Home', () => {
  const event = { preventDefault: () => {} }
  jest.spyOn(event, 'preventDefault')
  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    wrapper.instance().handleSelectChange('drame', '');
    wrapper.find('form').simulate('submit', event)
    expect(event.preventDefault).toBeCalled()
    expect(wrapper.find('Row')).not.toBe(null);
  });

});