import React from 'react';
import { shallow, configure,mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardTemplate from './CardTemplate';


configure({adapter: new Adapter()});
const props = {
    
}
let wrapper = mount(<CardTemplate {...props}/>);
describe('CardTemplate', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapper.find('div')).not.toBe(null);
  });
  it('should render the Title Component correctly', () => {
    wrapper.instance().handleSearch(false, 'got','drama') 
    expect(wrapper.find('Row')).not.toBe(null);
    expect(wrapper.find('Link')).not.toBe(null);
    expect(wrapper.find('Rate')).not.toBe(null);
    expect(wrapper.find('Card')).not.toBe(null);
    expect(wrapper.find('img')).not.toBe(null);
    expect(wrapper.find('h3')).not.toBe(null);

  });

});