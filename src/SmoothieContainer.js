import React from 'react';
import Smoothie from './Smoothie.js'

export default function SmoothieContainer(props) {
  return (
    <div>
      {
      props.smoothies.map(smoothie => {
        // console.log("image", smoothie.img)
        return (
          <Smoothie 
            name={smoothie.name}
            img={smoothie.img}
            key={smoothie.id}
          />
        )
      })
      }
    </div>
  )
}