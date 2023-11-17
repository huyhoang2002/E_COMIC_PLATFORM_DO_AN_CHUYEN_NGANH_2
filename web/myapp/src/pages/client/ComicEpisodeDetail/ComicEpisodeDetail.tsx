import { useDispatch, useSelector } from "react-redux"
import { comicEpisodeDetailSelector } from "../../../store/comic/selector"
import { getComicEpisodeDetailAction } from "../../../store/comic/action"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import EpisodeImage from "./EpisodeImage"
import { TEpisodeDetail } from "../../../services/models/comic"

const ComicEpisodeDetail = () => {

    const dispatch = useDispatch()
    const comicEpisodeDetail = useSelector(comicEpisodeDetailSelector)
    const params = useParams()
    const [ searchParams ] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getComicEpisodeDetailAction(params?.id as string, Number(searchParams.get("index"))))
    }, [params, searchParams, dispatch])

    const handleMoveNext = (index: string) => {
        navigate(`/c/detail/${params?.id}/episode?index=${Number(index) + 1}`)
    }

    const handleMovePrevious = (index: string) => {
        navigate(`/c/detail/${params?.id}/episode?index=${Number(index) - 1}`)
    }

    return (
        <>
            <div className="p-[80px] flex flex-col gap-2 items-center w-[100%]">
                <div className="p-[30px] flex flex-row justify-around w-full">
                    <p
                        onClick={handleMovePrevious.bind(this, searchParams.get("index") as string)} 
                        className="text-white font-bold text-[25px] cursor-pointer hover:text-orange-500"
                    >Previous</p>
                    <p className="text-white font-bold text-[25px]">Volume: <span className="text-orange-600">{comicEpisodeDetail?.episode}</span></p>
                    <p                         
                        onClick={handleMoveNext.bind(this, searchParams.get("index") as string)} 
                        className="text-white font-bold text-[25px] cursor-pointer hover:text-orange-500"
                    >Next</p>
                </div>
                <EpisodeImage 
                    episodeDetail={comicEpisodeDetail?.episodeDetail as Array<TEpisodeDetail> | undefined}
                />
            </div>
        </>
    )
}

export default ComicEpisodeDetail