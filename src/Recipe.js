import React, { Component } from 'react';

export default function Recipe(props) {
  return (
    <div className='recipe-details'>
        <h4>Servings: {props.chosenRecipe.servings}</h4>
        <h4><a href={props.chosenRecipe.source}>Source</a></h4>
      {
        props.chosenRecipe.recipe.map(steps => {
          return (
              <li key={steps}>{steps}</li>
          )
        })
      }
    </div>
  )
}

