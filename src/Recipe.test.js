import React from 'react';
import Recipe from './Recipe.js';
import { shallow } from 'enzyme'

const mockChosenRecipe = {
  id: 1,
  img: "images/babe-ruth.png",
  ingredients: ["strawberries", "pineapple", "banana", "orange juice", "yogurt", "spinach", "chia seeds", "flaxseed"],
  name: "Babe Ruth Strawberry Pineapple Banana Smoothie",
  recipe: ["1 cup strawberries", "1/2 cup pineapple", "1 banana", "2 cups orange juice", "1/2 cup greek yogurt", "1 cup spinach, optional", "1 tablespoon chia or flaxseed, optional", "ice"],
  servings: 4,
  source: "https://www.modernhoney.com/6-healthy-superfood-smoothies/"
}

describe('Recipe', () => {
  const wrapper = shallow(
    <Recipe chosenRecipe={mockChosenRecipe}/>
  );

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})