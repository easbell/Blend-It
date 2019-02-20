import React from 'react';

export default function ChosenIngredientList(props){
  return(
    <div className="chosen-ingredients">
      <h3>Selected Ingredients: </h3>
        {
          props.ingredients.map(chosen => {
            return (
              <p>{chosen}</p>
              )
          })
        }
        <div>
          <button className="button" onClick={props.resetButton}>Clear Selections</button>
        </div>
    </div>
  )
}