import React from 'react'
import './cards.css'
import { FastCounter } from "react-smooth-counter";
import Odometer from 'react-odometerjs';



const Cards = () => {
  return (
    <div className='box'>
        <div className='b1'> <div className='h'>Current Projects</div>
        <FastCounter
          delay={2000}
          startNumber={0}
          to={2}
          style={{
            color: "black",
            fontWeight:'bold' 
          }}
          className={"randomClass"}
        />+ 
           </div>
        <div className='b2'><div className='h'>Completed Projects</div>
          <FastCounter
          delay={2000}
          startNumber={0}
          to={11}
          style={{
            color: "black",
            fontWeight:'bold' 
          }}
          className={"randomClass"}
        />+</div>
        <div className='b3'><div className='h'>Future Projects</div>
          <FastCounter
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
        <div className='b2'><div className='h'>Experience</div>
          <FastCounter
          delay={2000}
          startNumber={0}
          to={40}
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


