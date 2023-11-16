import { TEpisodeDetail } from '../../../services/models/comic'

type Props = {
    episodeDetail: Array<TEpisodeDetail> | undefined
}

const EpisodeImage = ({ episodeDetail }: Props) => {
  return (
    <>
        {episodeDetail?.map(detail => {
            return (
                <img className="w-full md:w-[700px] lg:w-[900px]" src={detail.imageUrl}/>
            )
        })}
    </>
  )
}

export default EpisodeImage