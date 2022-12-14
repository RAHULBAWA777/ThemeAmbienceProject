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
        <div className="col-sm-6">
          <div className="cont">
            <div className='one'>
              <img className='pic' src={globe} alt='globe' />
              {/* <h1>Theme Ambience</h1> */}
              <h3>Head Office</h3>
              <h5>Plot 1-B, H.No. 8-2-293/82/L/1-B. 1st Floor,</h5>
              <h5> MLA Colony, Road No. 12,Banjara Hills,</h5>
              <h5>Hyderabad - 500034</h5>

            </div>
            <div className='two'>
              <img className='pic' src={call} alt='globe' />
              <h3>Phones</h3>

              <h5>Mobile : 9391415599 / 9391415884 / 6303363461</h5>

            </div>
            <div className='three'>
              <img className='pic' src={mail} alt='globe' />
              <h3>Write Us</h3>
              <h5>Email : <a href="mailto: Sales22@propbuynsell.com">Sales22@propbuynsell.com</a> </h5>
              {/* <h5>Email : <a href="mailto: themeambience@gmail.com">themeambience@gmail.com</a>  (For contractors and other queries)</h5>  */}
            </div>
          </div>
        </div>

        <div className="col-sm-6 c">
          <FormComponent />
        </div>
      </div>
    </>
  )
}

export default Contact