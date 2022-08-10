import React from 'react'
import './cards.css'
import { FastCounter } from "react-smooth-counter";
import Odometer from 'react-odometerjs';



const Cards = () => {
  return (
    <div className='box'>
        <div className='b1'>
        <FastCounter
          delay={2000}
          startNumber={0}
          to={10}
          style={{
            color: "black",
            fontWeight:'bold' 
          }}
          className={"randomClass"}
        />+ 
           </div>
        <div className='b2'><FastCounter
          delay={2000}
          startNumber={0}
          to={5}
          style={{
            color: "black",
            fontWeight:'bold' 
          }}
          className={"randomClass"}
        />+</div>
        <div className='b3'><FastCounter
          delay={2000}
          startNumber={0}
          to={2}
          style={{
            color: "black",
            fontWeight:'bold',
            transition:'1s' 
          }}
          className={"randomClass"}
        />+</div>
    </div>
  )
}

export default Cards


