import useState from 'react'
import './currentViews.css'
import Logo from '../../images/Theme-Imperial-logo.png'
import years from '../../images/40 years.png'
import ground from '../../images/Picture5.jpg'
import pi1 from '../../images/Picture6.jpg'
import pi2 from '../../images/Picture7.jpg'
import pi3 from '../../images/Picture8.jpg'
import pi4 from '../../images/Picture9.jpg'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'
import f5 from '../../images/f5.jpg'
import f6 from '../../images/f6.jpg'
import f7 from '../../images/f7.jpg'
import f8 from '../../images/f8.jpg'

const Project = () => {
  return (
    <>
      <div >
        <iframe style={{ width: '80%' }} className='frame' src='https://theme-imperial-3-d-project.vercel.app/'
          title='3D Project'
          frameBorder='0' referrerPolicy='no-referrer-when-downgrade' />
      </div>
      <div className='banner'>
        <button id='btn'>-</button>
        <img src={Logo} alt='logo' height={90} width={200} />
        <h1 style={{ fontSize: '20px' }}>Theme Ambience Group</h1>
        <h6>TS RERA No:P02400004462</h6>
        <hr className='hh' />
        <h2 style={{ fontSize: '25px' }}>Attarpur, Hyderbad</h2>
        <h3 style={{ fontSize: '20px' }}>Total Units | 108 Units</h3>
        <h4 style={{ fontSize: '16px' }}>2BHK Apartments | 30Units</h4>
        <h5 style={{ fontSize: '15px' }}>1172 Sq.ft - 1368 Sq.ft</h5>
        <hr className='hh' />
        <h4 style={{ fontSize: '16px' }}>3BHK Apartments | 78 Units</h4>
        <h5 style={{ fontSize: '15px' }}>1775 Sq.ft - 2638 Sq.ft</h5>
      </div>
      <div className='bn2'>
        <img src={years} alt='logo' height={90} width={200} />
      </div>
      <div className='projectSpecs'>
        <h1>Current Projects -Theme Imperial</h1>
        <br />
        <br />
        <br />
        <h2>Theme Imperial @ Attapur, Hyderabad</h2>

        <h5>
          <ul>
            <li>2.25 Acres of Land situated at Attapur, Hyderabad. </li>

            <li>Planning to develop a total of 208 Apartments</li>

            <li>Total 12 Floors with Built up area up to 434000 sft</li>
          </ul>

          The venture is surrounded by Hospitals such as Zoi, Germanten Hospital, etc… which are just in the range of 1 to 3 Kms
          On the other hand schools like Glendale, Kangaroo Kids, Army School, etc.. are in the vicinity.
        </h5>
        <img src={ground} />
      </div>

      <div className='buildingView container'>
        <h1>Highlights</h1>

        <div className='row'>

          <div className="col-sm-6">
            <div className="card f" style={{width:'40rem'}}>
              <img className="card-img-top" src={pi1} alt="Card image cap" />
            </div>
          </div>

         
          <div className="col-sm-6">
            <div className="card f" style={{width:'42rem'}}>
              <img className="card-img-top" src={pi2} alt="Card image cap" />
            </div>
          </div>
    

          
          <div className="col-sm-6">
            <div className="card f" style={{width:'40rem'}}>
              <img className="card-img-top" src={pi3} alt="Card image cap" />
            </div>
          </div>
         

          
          <div className="col-sm-6">
            <div className="card f" style={{width:'42rem'}}>
              <img className="card-img-top" src={pi4} alt="Card image cap" />
            </div>
          </div>
         
        </div>
      </div>



      <div className='gallery container'>
        <h1 style={{marginTop:'10rem'}}>Gallery</h1>

        <div className='row'>

          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f1} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img style={{ height:'14rem'}} className="card-img-top" src={f2} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f3} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f4} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f5} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f6} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f7} alt="Card image cap" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card s" style={{width:'20rem'}}>
              <img className="card-img-top" src={f8} alt="Card image cap" />
            </div>
          </div>

         
        </div>
      </div>
    </>
  )
}

export default Project