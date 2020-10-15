import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';


configure({adapter: new Adapter()});
const props = {
    gutter : "0 ",
    justify :"center-around",
    genre: '',
    isSearch: false,
    searchValue: ''
}
let wrapper = mount(<Home {...props}/>);
describe('Home', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    wrapper.instance().handleSearch(false, 'got','drama') 
    expect(wrapper.find('Row')).not.toBe(null);
  });

});