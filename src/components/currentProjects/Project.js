import React from 'react'
import './currentViews.css'

const Project = () => {
  return (
    <div >
        <iframe style={{width:'80%'}} className='frame' src='https://3d-model-two.vercel.app/' 
        title='3D Project'
        //  height={window.innerWidth>800?"660":"250"}  
        // width={window.innerWidth>800?"1500":"250"}

        frameBorder='0' referrerPolicy='no-referrer-when-downgrade'/>
    </div>
  )
}

export default Project