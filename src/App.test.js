import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

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

const mockIngredients = {
  fruit: [
  "banana",
  "pineapple",
  "mango"
  ],
  vegetables: [
  "spinach",
  "kale",
  "carrot"
  ],
  bases: [
  "milk",
  "yogurt",
  "coconut water"
  ],
  extras: [
  "chia seeds",
  "ginger",
  "cinnamon"
  ]
}

describe('App', () => {
  const wrapper = shallow(
    <App />
  );

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default states', () => {
    expect(wrapper.state()).toEqual({smoothies: [], ingredients: {}, error: '', chosenIngredients: [], filteredSmoothies: []})
  })

  it('should update the chosen ingredients when ingredient is selected', () => {
    expect(wrapper.state("chosenIngredients")).toEqual([])
    wrapper.instance().chooseIngredients("milk")
    expect(wrapper.state("chosenIngredients")).toEqual(["milk"])
  });

  it('should update the chosen ingredients when ingredient is de-selected', () => {
    expect(wrapper.state("chosenIngredients")).toEqual(["milk"])
    wrapper.instance().removeIngredient("milk")
    expect(wrapper.state("chosenIngredients")).toEqual([])
  });

  // it('should only show smoothies which match each chosen ingredient', () => {
  //   expect(wrapper.state("chosenIngredients")).toEqual(["oats"])
  //   wrapper.instance().filterSmoothies()
  //   expect(wrapper.state("smoothies").length).toEqual(3)
  // });
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
