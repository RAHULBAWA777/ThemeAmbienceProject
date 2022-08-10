import React from 'react'
import './currentViews.css'
import Logo from '../../images/Theme-Imperial-logo.png'
import years from '../../images/40 years.png'

const Project = () => {
  return (
    <>
    <div >
        <iframe style={{width:'80%'}} className='frame' src='https://theme-imperial-3-d-project.vercel.app/' 
        title='3D Project'
        //  height={window.innerWidth>800?"660":"250"}  
        // width={window.innerWidth>800?"1500":"250"}

        frameBorder='0' referrerPolicy='no-referrer-when-downgrade'/>
    </div>
    <div className='banner'>
    <img src={Logo} alt='logo' height={90} width={200} />
      <h1 style={{fontSize:'20px'}}>Theme Ambience Group</h1>
      <h6>TS RERA No:P02400004462</h6>
      <hr className='hh'/>
      <h2 style={{fontSize:'25px'}}>Attarpur, Hyderbad</h2>
      <h3 style={{fontSize:'20px'}}>Total Units | 108 Units</h3>
      <h4 style={{fontSize:'16px'}}>2BHK Apartments | 30Units</h4>
      <h5 style={{fontSize:'15px'}}>1172 Sq.ft - 1368 Sq.ft</h5>
      <hr className='hh'/>
      <h4 style={{fontSize:'16px'}}>3BHK Apartments | 78 Units</h4>
      <h5 style={{fontSize:'15px'}}>1775 Sq.ft - 2638 Sq.ft</h5>
    </div>
    <div className='bn2'>
    <img src={years} alt='logo' height={90} width={200} />
    </div>
    </>
  )
}

export default Project