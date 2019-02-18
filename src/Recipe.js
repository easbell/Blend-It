import React, { Component } from 'react';

export default function Recipe(props) {
  return (
    <div>
      {
        props.recipe.map(steps => {
          return (
            <p>{steps}</p>
          )
        })
      }
    </div>
  )
}

