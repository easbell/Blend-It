import React from 'react';
import Smoothie from './Smoothie.js'

export default function SmoothieContainer(props) {
  return (
    <ul>
      {
      props.smoothies.map(smoothie => {
        console.log(smoothie.name)
        return <Smoothie name={smoothie.name}
                         img={smoothie.img}/>
      })
      }
    </ul>
  )
}
