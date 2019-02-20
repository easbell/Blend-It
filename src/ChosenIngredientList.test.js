import React from 'react';
import ChosenIngredientList from './ChosenIngredientList.js';
import { shallow } from 'enzyme';

const chosenMock = ['Banana'];
const resetMockFunc = jest.fn();

describe('ChosenIngredientList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ChosenIngredientList  
        ingredients={chosenMock}
        resetButton={resetMockFunc}
      />
    )
  });

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire off function when clicked', () => {
    wrapper.find('.button').simulate('click');
    expect(resetMockFunc).toBeCalled();
  });
});