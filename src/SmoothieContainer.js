import React from 'react';
import Smoothie from './Smoothie.js'

export default function SmoothieContainer(props) {
  return (
    <ul>
      {
      props.smoothies.map(smoothie => {
        return <Smoothie name={smoothie.name}
                         img={smoothie.img}/>
      })
      }
    </ul>
  )
}
