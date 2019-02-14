import React from 'react';
import IngredientContainer from './IngredientContainer.js'

export default function Ingredient(props) {
  return ( 
    <h4>
    {props.ingredient}
    </h4>
  )
}