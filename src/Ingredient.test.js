import React from 'react';
import Ingredient from './Ingredient.js';
import { shallow } from 'enzyme';

const mockIngredient = 'Banana';
const chooseIngredientsMock = jest.fn();
const removeIngredientMock = jest.fn();

describe('Ingredient', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Ingredient 
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

  it('should have proper default states', () => {
    expect(wrapper.state()).toEqual({isChosen: false})
  });

  it('should change state and call proper function when selectIngredient is called', () => {
    expect(wrapper.state()).toEqual({isChosen: false});
    wrapper.find('.not-selected').simulate('click');
    expect(wrapper.state()).toEqual({isChosen: true});
    expect(chooseIngredientsMock).toBeCalled();
  });

  // it('should toggle state back and call proper function when selectIngredient is called again', () => {
  //   expect(wrapper.state()).toEqual({isChosen: true});
  //   wrapper.find('.selected').simulate('click');
  //   expect(wrapper.state()).toEqual({isChosen: false});
  //   expect(removeIngredientMock).toBeCalled();
  // });
})