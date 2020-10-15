import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
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
const prop1 =   {
  "history":{"length":50,"action":"PUSH","location":{"pathname":"/movie/82","search":"","hash":"","key": "zm6voz",}},
  "location":{"pathname":"/movie/82","search":"","hash":"","key": "zm6voz",},
  "match":{"path":"/movie/:id","url":"/movie/82","isExact":true,"params":{"id":"82"}}}

const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<MemoryRouter><Movie {...props} {...prop1}/></MemoryRouter>);
describe('Movie', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.find('Row')).not.toBe(null);
  });

});