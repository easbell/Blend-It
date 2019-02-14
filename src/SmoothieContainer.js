import React from 'react';
import Smoothie from './Smoothie.js'

export default function SmoothieContainer(props) {
  return (
    <div>
      {
      props.smoothies.map(smoothie => {
        return <Smoothie name={smoothie.name}
                         img={smoothie.img}/>
      })
      }
    </div>
  )
}
