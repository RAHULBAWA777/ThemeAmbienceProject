import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import FortImage from '../../images/fortview_main.jpg'
import GolfImage from '../../images/golfview_img_banner.jpg'
import LakeImage from '../../images/Highcompressed_1588995805.jpg'
import templeImage from '../../images/Highcompressed_2057613182.jpg'

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper" >
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  >
                <div >
                    <img alt="img3" src={LakeImage} style={{height:'42rem'}}/>
                </div>
                <div>
                    <img alt="img4" src={templeImage} style={{height:'42rem'}}/>
                </div>
                <div>
                    <img alt="img1" src={GolfImage}  style={{height:'42rem'}}/>
                </div>
                <div>
                    <img alt="img2" src={FortImage} style={{height:'42rem'}}/>
                </div>
            </Carousel>
        </div>
    );
}