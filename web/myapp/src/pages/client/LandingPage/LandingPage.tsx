import Carousel from "../../../components/LandingPage/Carousel/Carousel"
import ComicList from "../../../components/LandingPage/ComicList/ComicList"

const LandingPage = () => {
  return (
    <div className="text-lg font-bold">
      <Carousel />
      <div>
        <ComicList />
      </div>
    </div>
  )
}

export default LandingPage