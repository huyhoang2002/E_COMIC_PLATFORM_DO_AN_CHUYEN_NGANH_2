import { useDispatch, useSelector } from "react-redux"
import { episodesSelector } from "../../store/comic/selector"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getComicEpisodesAction } from "../../store/comic/action"

const VolumeList = () => {

  const episodes = useSelector(episodesSelector)
  const dispatch = useDispatch()
  const params = useParams()
  const navigation = useNavigate()

  const handleNavigateToEpisodeDetailPage = (comicId: string, index: number) => {
    navigation(`/c/detail/${comicId}/episode?index=${index}`)
  }

  useEffect(() => {
    dispatch(getComicEpisodesAction(params?.id as string))
  }, [params])

  return (
    <div className='px-3 lg:px-16 pb-5'>
      {episodes.map((episode, index) => {
        return (
          <div 
            className='flex w-full justify-between p-5 text-black hover:bg-orange-400 transition-all'
            onClick={() => handleNavigateToEpisodeDetailPage(episode.comicId, index)}
          >
            <p>VOL {episode.episode}</p>
            <p>{new Date(episode.modifiedAt).toLocaleDateString([])}</p>
          </div>
        )
      })}
    </div>
  )
}

export default VolumeList