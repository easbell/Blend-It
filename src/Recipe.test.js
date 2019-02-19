import React from 'react';
import Recipe from './Recipe.js';
import { shallow } from 'enzyme'

const mockRecipe = [
  "1 cup strawberries",
  "1/2 cup pineapple",
  "1 banana",
  "2 cups orange juice",
  "1/2 cup greek yogurt",
  "1 cup spinach, optional",
  "1 tablespoon chia or flaxseed, optional",
  "ice"
]

describe('Recipe', () => {
  const wrapper = shallow(
    <Recipe recipe={mockRecipe}/>
  );

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})