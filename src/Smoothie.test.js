import React from 'react';
import Smoothie from './Smoothie.js';
import { shallow } from 'enzyme'

const mockSmoothie = {
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
};

const showRecipeMock = jest.fn();

describe('Smoothie', () => {
  const wrapper = shallow(
    <Smoothie
      showRecipe={showRecipeMock}
      name={mockSmoothie.name}
      img={mockSmoothie.img}
      key={mockSmoothie.id}
      id={mockSmoothie.id}
    />
  );

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state of isSelected and invoke showRecipe when smoothie is clicked', () => {
    wrapper.find('.smoothie').simulate('click');
    expect(showRecipeMock).toBeCalled();
  })
  

});