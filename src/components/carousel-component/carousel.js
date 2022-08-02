import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import FortImage from '../../images/fortview_main.jpg'
import GolfImage from '../../images/golfview_img_banner.jpg'
import LakeImage from '../../images/main_img.jpg'
import templeImage from '../../images/temple-town-aprt1.jpg'

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
                <div>
                    <img alt="img1" src={GolfImage} />
                </div>
                <div>
                    <img alt="img2" src={FortImage} />
                </div>
                <div>
                    <img alt="img3" src={LakeImage} />
                </div>
                <div>
                    <img alt="img4" src={templeImage} />
                </div>
            </Carousel>
        </div>
    );
}