import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselFeatureCard from '../../Common/CarouselFeatureCard/CarouselFeatureCard';
const Carousel = () => {
  return (
      <div className=''>
        <ReactCarousel dynamicHeight={true} showThumbs={false} showStatus={false} className='h-[900px] max-md:h-[450px]'>
          <CarouselFeatureCard 
            title='NARUTO'
            wallpaper='https://wallpaper.dog/large/976662.jpg'
            content={"One of the most highest rate and on top of every japanese manga leaderboard through many years"}
          />
          <CarouselFeatureCard 
            title='ONE PIECE'
            wallpaper='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e8e5494-02de-4297-a5a0-25e0942701b0/d6i8dda-b3fbe044-9bfe-4857-8f01-fbe2f50d72d5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlOGU1NDk0LTAyZGUtNDI5Ny1hNWEwLTI1ZTA5NDI3MDFiMFwvZDZpOGRkYS1iM2ZiZTA0NC05YmZlLTQ4NTctOGYwMS1mYmUyZjUwZDcyZDUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Efxn86lrFGlw88JAj6nv_ncgFJrsgJt3N2h5t3Bq2RU'
            content={"The new emperors is set on the journey to conquere one piece. Follow every newest chapter of Oda Masterpiece"}
          />
        </ReactCarousel>
      </div>
  )
}

export default Carousel