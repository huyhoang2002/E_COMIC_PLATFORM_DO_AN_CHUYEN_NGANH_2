import { useDispatch, useSelector } from "react-redux"
import { episodesSelector } from "../../store/comic/selector"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getComicEpisodesAction } from "../../store/comic/action"

const VolumeList = () => {

  const episodes = useSelector(episodesSelector)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getComicEpisodesAction(params.id as string))
  }, [params.id])

  return (
    <div className='px-3 lg:px-16 pb-5'>
      {episodes.map(episode => {
        return (
          <div className='flex w-full justify-between p-5 text-black hover:bg-orange-400 transition-all'>
            <p>VOL {episode.episode}</p>
            <p>{new Date(episode.modifiedAt).toLocaleDateString([])}</p>
          </div>
        )
      })}
    </div>
  )
}

export default VolumeList