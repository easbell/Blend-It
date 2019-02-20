import React from 'react';

export default function Recipe(props) {
  return (
    <div className='recipe-details'>
      <h4>Servings: {props.chosenRecipe.servings}</h4>
      <ul>
        {
          props.chosenRecipe.recipe.map(steps => {
            return (
                <li key={steps}>{steps}</li>
            )
          })
        }
      </ul>
      <h4><a href={props.chosenRecipe.source} target="_blank">Source Link</a></h4>
    </div>
  )
}

