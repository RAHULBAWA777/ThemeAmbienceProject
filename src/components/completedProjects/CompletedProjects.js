import React from 'react'
import './completedProjects.css'
import Swapanlok from '../../images/swapnalok.jpg'
import Indralok from '../../images/indralok.jpg'
import ambience_avenue from '../../images/ambience_avenue.jpg'
import whisper_valley from '../../images/whisper_valley.jpg'
import canton from '../../images/canton.jpg'
import anthem from '../../images/anthem.jpg'
import ambiencefort from '../../images/ambiencefort.jpg'
import temple from '../../images/temple-town-front1.jpg'

const CompletedProjects = () => {
  return (
    <>
      <div className=' container' style={{ height: '100%', marginTop: '1rem' }}>

        <div className='row'>
          <div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={Swapanlok} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Swapanlok</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={Indralok} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Indralok Complex</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={ambience_avenue} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ambience Avenue</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          < div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={whisper_valley} className="card-img-top" alt="..." style={{height:'13rem'}}/>
              <div className="card-body">
                <h5 className="card-title">Whisper Valley</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={canton} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ambience Canton</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="card " style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={anthem} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ambience Anthem</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="card" style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={ambiencefort} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ambience Fort</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div className="card" style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={Swapanlok} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Swapanlok</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div className="card" style={{ width: '20rem',marginTop:'2rem' }}>
              <img src={temple} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tirupathi Temple Town</h5>
                {/* <a href="#" className="btn btn-primary">More Details</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompletedProjects