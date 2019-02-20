import React from 'react';
import SmoothieContainer from './SmoothieContainer.js';
import { shallow } from 'enzyme';


const hiddenMock = jest.fn();
const mockSmoothies = [{
id: 1,
name: "Babe Ruth Strawberry Pineapple Banana Smoothie",
ingredients: [
"strawberries",
"pineapple",
"banana",
"orange juice",
"yogurt",
"spinach",
"chia seeds",
"flaxseed"
],
recipe: [
"1 cup strawberries",
"1/2 cup pineapple",
"1 banana",
"2 cups orange juice",
"1/2 cup greek yogurt",
"1 cup spinach, optional",
"1 tablespoon chia or flaxseed, optional",
"ice"
],
servings: 4,
source: "https://www.modernhoney.com/6-healthy-superfood-smoothies/",
img: "images/babe-ruth.jpg"
},
{
id: 2,
name: "Cherry Almond Smoothie",
ingredients: [
"milk",
"cherries",
"raw almonds",
"honey",
"cinnamon",
"almond extract",
"coconut oil"
],
recipe: [
"1 cup almond milk",
"1 cup cherries",
"3 tablespoons raw almonds",
"2 tablespoons raw honey",
"1 teaspoon cinnamon",
"1/2 teaspoon almond extract",
"1 tablespoon coconut oil"
],
servings: 1,
source: "https://bakedbree.com/cherry-almond-smoothies",
img: "images/cherry-almond.jpg"
}];


describe('SmoothieContainer', () => {
   const wrapper = shallow(
    <SmoothieContainer 
      smoothies = {mockSmoothies}
      hideIngredients={hiddenMock}
    />
  );

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({showRecipe: false, chosenSmoothie: ''})
  });

  it('should change state of SmoothieContainer from false to true', () => {
    const showRecipe = jest.fn();
    expect(wrapper.state('showRecipe')).toEqual(false);
    wrapper.instance().showRecipe(mockSmoothies[0]);
    expect(wrapper.state('showRecipe')).toEqual(true); 
    expect(wrapper.state('chosenSmoothie')).toEqual(1) 
  });
});







