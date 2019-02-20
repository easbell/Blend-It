import React from 'react';
import Ingredient from './Ingredient.js';
import { shallow } from 'enzyme';

const mockIngredient = 'Banana';
const chooseIngredientsMock = jest.fn();
const removeIngredientMock = jest.fn();
const isChosenMock = false;

describe('Ingredient', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Ingredient 
        isChosen={isChosenMock}
        ingredient={mockIngredient} 
        key={mockIngredient} 
        chooseIngredients={chooseIngredientsMock}
        removeIngredient={removeIngredientMock}
      />
    )
  });

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire off function when clicked', () => {
    wrapper.find('.not-selected').simulate('click');
    expect(chooseIngredientsMock).toBeCalled();
  });
})