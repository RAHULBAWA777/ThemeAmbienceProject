import React from 'react'
import FormComponent from '../form-component/FormComponent'
import './contact.css'
import globe from '../../images/icons8-globe.gif'
import call from '../../images/icons8-missed-call.gif'
import mail from '../../images/icons8-gmail-logo.gif'

const Contact = () => {
  return (
    <>
    <div className='row'>
          <div className="col-6">
        <div className="cont">
          <div className='one'>
            <img className='pic' src={globe} alt='globe'/>
            {/* <h1>Theme Ambience</h1> */}
            <h3>Head Office</h3>
            <h5>D.No 8-2-293/82/L/1-B. 1st Floor,</h5>
            <h5>MLA Colony, Road No. 12,</h5>
            <h5>Banjara Hills, Hyderabad - 500O34</h5>
          
          </div>
          <div className='two'>
            <img className='pic' src={call} alt='globe'/>
            <h3>Phones</h3>
            <h5>Ph : 040-23377851/2/3,</h5>
        <h5>Mobile : +91-9391050852, 9393008035, 9177711339</h5>
        <h5>Fax : 040-23377854</h5>
       
          </div>
          <div className='three'>
            <img className='pic' src={mail} alt='globe'/>
            <h3>Write Us</h3>
            <h5>Email : <a href="mailto: theme@themeambience.com">theme@themeambience.com</a> (For sales and marketing queries)</h5>
        <h5>Email : <a href="mailto: themeambience@gmail.com">theme@themeambience.com</a> (For sales and marketing queries)</h5> 
          </div>
         </div>
    </div>
    
    <div className="col-6 c">
    <FormComponent/>
    </div>
    </div>
    </>
  )
}

export default Contact