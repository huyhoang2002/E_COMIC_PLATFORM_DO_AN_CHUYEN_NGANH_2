import { useSelector } from "react-redux"
import ComicInfo from "../../../components/ComicDetail/ComicInfo"
import ComicDetailSkeleton from "../../../components/Common/Skeleton/ComicDetailSkeleton"
import { comicSelector, isLoadingSelector, isSuccessSelector } from "../../../store/comic/selector"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getComicByIdAction } from "../../../store/comic/action"
import { useParams } from "react-router-dom"
import { resetStateAction } from "../../../store/base/action"

const ComicDetail = () => {

  const isSuccess = useSelector(isSuccessSelector)
  const isLoading = useSelector(isLoadingSelector)
  const comic = useSelector(comicSelector)
  const dispatch = useDispatch()
  const params = useParams()
  
  useEffect(() => { 
    if (isSuccess === undefined) {
      dispatch(getComicByIdAction(params?.id as string))
    }
    return () => {
      if (isLoading === false && isSuccess === true || false) {
        dispatch(resetStateAction())
      }
    }
  }, [params.id, isSuccess])
  
  return (
    <div>
      <img src={comic?.wallPaperUrl !== null ? comic?.wallPaperUrl : "https://getwallpapers.com/wallpaper/full/7/f/4/1168332-best-hd-comic-book-wallpaper-1920x1080.jpg"} alt="" className="h-[600px] object-cover w-full absolute z-[-1]" />
    {isSuccess === false ?
        <ComicDetailSkeleton /> :       
        isSuccess === true ? 
        <ComicInfo /> :
        <></>
      }
    </div>
  )
}

export default ComicDetail