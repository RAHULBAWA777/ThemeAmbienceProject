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
  <div className='container  ' style={{height: '100%' ,marginTop:'1rem'}}>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Swapanlok} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Swapnalok/Surya Kiran Complex</h5>
        <p className="card-text">A shopping-cum-office complex having 200 shops on three levels and 160 offices with a total built-up area of 4,00,000 Sft. was completed in the year 1988-89. The complex is located on Sarojini Devi Road, Secunderabad, Andhra Pradesh. The Complex has won “National Design Award 1989”.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Indralok} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8 ">
      <div className="card-body">
        <h5 className="card-title">Indralok Complex</h5>
        <p className="card-text">A residential Complex situated at Road No.1, Banjara Hills, a posh residential locality having 80 apartments and was completed in the year 1990-91. The total built-up area of the complex is 1,50,000 Sft.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={ambience_avenue} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ambience Avenue</h5>
        <p className="card-text">A residential complex situated at Srinagar Colony, Hyderabad, a posh residential locality having 32 apartments with builtup area of 75,000 Sft. It was completed in the year 1997-98.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src={whisper_valley} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Whisper Valley</h5>
        <p className="card-text">A self-contained residential township situated in Jubilee Hills, Hyderabad having 83 Bungalows along with a Recreational Club. The total built-up area of the township is over 2,25,000 Sft spread over 13 Acres of land. The Project was completed in the year 1999-2000.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src={canton} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ambience Canton</h5>
        <p className="card-text">A self-contained residential township situated on National Highway No.7 near Secunderabad 26 Bungalows and 34 Row Houses with a total built-up area of 2,00,000 Sft. spread over 6.5 Acres. The project was completed by June 2005.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={anthem} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ambience Anthem</h5>
        <p className="card-text">	A self-contained residential township situated on the National Highway No.7 near Secunderabad consisting 68 Bungalows with a total built-up area of 2,50,000 Sft spread over 26 Acrea. The project also has a Recreational Club with all the modern amenities. The project was completed by June 2007.</p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ambiencefort} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ambience Fort</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3 mx-auto" style={{maxWidth: '740px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={temple} className="img-fluid rounded-start" alt="..." style={{width:'300px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Tirupathi Temple Town</h5>
        <p className="card-text">Tirupati Temple Town is a prestigiious venture floated by one of the most reputed promoters,who in ove two decades have reached commanding positions in the construction industry.</p>
      </div>
    </div>
  </div>
</div>
      </div>
      </>
  )
}

export default CompletedProjects