import React, { useState, useEffect } from 'react';
import TextCard from "../text-card-component/TextCard";
import Form from "../form-component/FormComponent";
import CarouselComponent from "../carousel-component/carousel";
import TextCardLeft from "../text-card-left-component/TextCardLeft";
import Modals from "../modals/Moodals"
// import orchard from "../../images/ORCHARD.jpg"
// import road from "../../images/road.jpg"
import FortImage from '../../images/fortview_main.jpg'
import GolfImage from '../../images/golfview_img_banner.jpg'
import templeImage from '../../images/temple-town-aprt1.jpg'
import FooterComponent from '../footer-component/FooterComponent';
import Cards from '../floatingCards/Cards';

const FrontPageContent = () => {
  
   
  
  return (
    <>
    <CarouselComponent/>

 <TextCard 
  heading="Welcome to Theme Ambience"
  para="Theme Ambience Constructions Pvt Ltd, a well established construction company headed by Mr. Bimal Kumar Kedia (MD) in the twin cities known for its uncompromising quality standards, and in schedule completion of projects, ever evolving to provide customers with an environment that truly understands their needs and aspirations.
  
  The firm has over Thirty Years of experience in the building industry, having built several buildings since inception. Given the immense scope in the housing industry in India, the company has been focusing on promoting a series of large residential townships and apartments in several areas in and around the city. All the ventures promoted by the firm so far have been highly successful. Theme Ambience Constructions Pvt Ltd is ISO-9001 certified Company."
  // img={open}
  imgOrder="-1"
/>


<TextCardLeft
  heading="Golf View"
  subHeading="#HeartOfHyderabad"
  para="A Futuristic location par excellence Surrounded by software giants like Microsoft, Infosys, Wipro and Indian School of Business. Hyderabad’s elite schools Oakridge and Delhi Public School are in the vicinity. Ramanaidu Cine Studios have set up their base nearby."
  link="read more ....."
  img={GolfImage}
  imgOrder="0"
/>

<TextCardLeft
  heading="Fort View"
  subHeading="The Vision & DNA"
  para="Fort View a dream of spacious and luxurious apartments that is set in between the lush green tranquility of nature and yet which is at an arms distance to the hub of Happening Hyderabad. One can taste the flavour of history all around and at the same time enjoy the benefits of ultra modern comforts and amenities. "
  link="read more ....."
  img={FortImage}
  imgOrder="-1"
/>

<TextCardLeft
  heading="Tirupati Temple Town"
  subHeading="#HeartOfHyderabad"
  para="Tirupati Temple Town is a prestigiious venture floated by one of the most reputed promoters,who in ove two decades have reached commanding positions in the construction industry. "
  link="read more ....."
  img={templeImage}
  imgOrder="0"
/>
<Cards/>
<Form />
 <FooterComponent/>
    </>
  )
}

export default FrontPageContent