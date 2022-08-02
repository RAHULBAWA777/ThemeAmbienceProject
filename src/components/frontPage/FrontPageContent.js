import React from 'react'
import TextCard from "../text-card-component/TextCard";
import Form from "../form-component/FormComponent";
import CarouselComponent from "../carousel-component/carousel";
import TextCardLeft from "../text-card-left-component/TextCardLeft";
// import orchard from "../../images/ORCHARD.jpg"
// import road from "../../images/road.jpg"
import FortImage from '../../images/fortview_main.jpg'
import GolfImage from '../../images/golfview_img_banner.jpg'
import templeImage from '../../images/temple-town-aprt1.jpg'

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
  heading="VASUNDARA NAGALAND"
  subHeading="#HeartOfHyderabad"
  para="Sobha Hartland is an 8 million sq. ft. waterfront community of luxurious apartments, beautiful villas and high-end townhouses located in Hyderabad City."
  link="read more ....."
  img={GolfImage}
  imgOrder="0"
/>


<TextCardLeft
  heading="PASSION FOR PERFECTION"
  subHeading="The Vision & DNA"
  para="Crafting a product that stands out entails attention to the finest of details. Ensuring exceptional quality, every time."
  link="read more ....."
  img={FortImage}
  imgOrder="-1"
/>

<TextCardLeft
  heading="VASUNDARA HARTLAND"
  subHeading="#HeartOfHyderabad"
  para="Sobha Hartland is an 8 million sq. ft. waterfront community of luxurious apartments, beautiful villas and high-end townhouses located in Hyderabad City."
  link="read more ....."
  img={templeImage}
  imgOrder="0"
/>

<Form />
    </>
  )
}

export default FrontPageContent