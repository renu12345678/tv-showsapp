import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movie from './Movie';


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

let wrapper = mount(<Movie {...props}/>);
describe('Movie', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.find('Row')).not.toBe(null);
  });

});