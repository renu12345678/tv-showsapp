import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardTemplate from './CardTemplate';
import { MemoryRouter } from 'react-router-dom'



configure({adapter: new Adapter()});
const props = {
  handleSearch: jest.fn()
}
let wrapper = mount(<MemoryRouter><CardTemplate {...props}/> </MemoryRouter>);
describe('CardTemplate', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    expect(wrapper.find('Card')).not.toBe(null);
    expect(wrapper.find('Link')).not.toBe(null);
    expect(wrapper.find('div')).not.toBe(null);
    expect(wrapper.find('img')).not.toBe(null);
    expect(wrapper.find('h3').length).toBe(2);

  });

});