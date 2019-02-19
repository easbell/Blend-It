import React from 'react';
import IngredientContainer from './IngredientContainer.js';
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

const chooseIngredientsMock = jest.fn();
const removeIngredientMock = jest.fn();

describe('IngredientContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <IngredientContainer 
        ingredients={mockIngredients} 
        chooseIngredients={chooseIngredientsMock}
        removeIngredient={removeIngredientMock} 
      />
    );
  }); 

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default states', () => {
    expect(wrapper.state()).toEqual({categories: ['fruit', 'vegetables', 'bases', 'extras']})
  })

  
});

