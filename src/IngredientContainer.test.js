import React from 'react';
import IngredientContainer from './IngredientContainer';
import { shallow, mount } from 'enzyme';

const mockIngredients = {
  fruit: [
  "banana",
  "pineapple",
  "mango",
  "cherries",
  "blueberries",
  "strawberries",
  "peach"
  ],
  vegetables: [
  "spinach",
  "kale",
  "carrot",
  "power greens mix",
  "cucumber",
  "beet"
  ],
  bases: [
  "milk",
  "yogurt",
  "coconut water",
  "orange juice"
  ],
  extras: [
  "chia seeds",
  "ginger",
  "cinnamon",
  "protein powder",
  "honey",
  "almond butter",
  "vanilla extract",
  "mint leaves"
  ]
}

const mockArray = [];

const chooseIngredientsMock = jest.fn();
const removeIngredientMock = jest.fn();

describe('IngredientContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <IngredientContainer 
        ingredients={mockIngredients} 
        chosenIngredients={mockArray}
        chooseIngredients={chooseIngredientsMock}
        removeIngredient={removeIngredientMock} 
      />
    );
  }); 

  it('should match a snapshot with all data passed in', () => {
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default states', () => {
    expect(wrapper.state()).toEqual({categories: ['fruit', 'vegetables', 'bases', 'extras']})
  });
  
});

