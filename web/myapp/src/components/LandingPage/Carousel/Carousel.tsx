import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselFeatureCard from '../../Common/CarouselFeatureCard/CarouselFeatureCard';
const Carousel = () => {
  return (
      <div className=''>
        <ReactCarousel dynamicHeight={true} showThumbs={false} showStatus={false}>
          <CarouselFeatureCard 
            title='NARUTO'
            wallpaper='https://wallpaper.dog/large/976662.jpg'
            content={"One of the most highest rate and on top of every japanese manga leaderboard through many years"}
          />
          <div></div>
        </ReactCarousel>
      </div>
  )
}

export default Carousel