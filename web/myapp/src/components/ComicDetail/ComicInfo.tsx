import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { comicSelector, episodesSelector } from '../../store/comic/selector'
import ComicDetail from '../Client/ComicDetail/ComicDetail'

const ComicInfo = () => {
  const navigate = useNavigate()
  const params = useParams()
  const comic = useSelector(comicSelector)
  const episode = useSelector(episodesSelector)

  const navigateToCommentList = () => {
    navigate(`/c/detail/${params?.id}/comment`)
  }

  const navigateToVolList = () => {
    navigate(`/c/detail/${params?.id}/vol`)
  }

  const handleReadFirstVolume = () => {
    navigate(`/c/detail/${params?.id}/episode?index=0`)
  }

  return (
    <>
      <div className="flex pt-[150px] flex-col gap-3 items-center">
        <ComicDetail 
          title={comic?.title as string}
          authorName={comic?.author.name as string}
          handleReadFirstVolume={handleReadFirstVolume}
          categoryName={comic?.category.categoryName as string}
          imageUrl={comic?.imageUrl as string}
          latestEpisodeUpdate={episode.length}
          description={comic?.description as string}
          id={comic?.id as string}
        />
        <div className="flex flex-col w-[370px] md:w-[700px] lg:w-[1100px] justify-between bg-white">
          <div className='text-black flex gap-6 m-5 cursor-pointer'>
            <p className='font-medium hover:text-orange-600' onClick={navigateToVolList.bind(this)}>VOL.</p>
            <p className='font-medium hover:text-orange-600' onClick={navigateToCommentList.bind(this)}>Comment</p>
          </div>       
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default ComicInfo