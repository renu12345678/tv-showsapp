import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'

import Showfilms from './Showfilms';
import Api from '../../Services/dataService.js'



configure({adapter: new Adapter()});
const props = {
    gutter : "0 ",
    results:[],
    genre: '',
    isSearch: false,
    searchValue: 'firefly',
    isLoading: false,
    handleSearch: jest.fn(),
    getSearch: jest.fn(),
    getShows: jest.fn()
}
const Data= {
  "score":29.870836,"show":{"id":180,"url":"http://www.tvmaze.com/shows/180/firefly","name":"Firefly",
  "type":"Scripted","language":"English","genres":["Drama","Adventure","Science-Fiction"],"status":"Ended",
  "runtime":60,"premiered":"2002-09-20","officialSite":null,"schedule":{"time":"20:00","days":["Friday"]},
  "rating":{"average":9.2},"weight":92,"network":{"id":4,"name":"FOX","country":{"name":"United States",
  "code":"US","timezone":"America/New_York"}},"webChannel":null,
  "externals":{"tvrage":3548,"thetvdb":78874,"imdb":"tt0303461"},
  "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/1/2600.jpg",
  "original":"http://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg"},
  "summary":"<p>Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.</p>","updated":1591835730,
  "_links":{"self":{"href":"http://api.tvmaze.com/shows/180"},
  "previousepisode":{"href":"http://api.tvmaze.com/episodes/13005"}}}
}
const mockedEvent = { e: { preventDefault : {}} }

let wrapper = mount(<MemoryRouter><Showfilms {...props} {...Data}/></MemoryRouter>);
describe('Home', () => {

  it('should render the Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
    expect(wrapper.find('Row')).not.toBe(null);
    expect(wrapper.find('Col')).not.toBe(null);

  });
  it('should render the Component correctly', () => { 
    wrapper.instance().componentDidMount(props);
    expect(wrapper.find('div')).not.toBe(null);
   

  });
  test('the data', async () => {
    return await Api.getSearch().then(data => {
      expect(data).not.toBe(
        null
       );
    });
  });
  test('the data', async () => {
    return await Api.getShows().then(data => {
      expect(data).not.toBe(
       null
      );
    });
  })

});



