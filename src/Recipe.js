import React from 'react';

export default function Recipe(props) {
  return (
    <div>
      {
        props.recipe.map(steps => {
          return (
            <li>{steps}</li>
          )
        })
      }
    </div>
  )
}

