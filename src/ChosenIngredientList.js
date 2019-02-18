import React from 'react';

export default function ChosenIngredientList(props){
  return(
    <div>
      <h3>
        {
          props.ingredients.map(chosen => {
            return (
              <p>{chosen}</p>
              )
          })
        }
      </h3>
    </div>
  )
}