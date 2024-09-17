import { Button } from "flowbite-react"
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isCreatedSelector } from "../../../store/comic/selector";
import { addComicToFavoriteAction } from "../../../store/comic/action";
import { IAddComicToFavorite } from "../../../services/models/comic";
import { userSelector } from "../../../store/user/selector";
import { useEffect } from "react";
import { AlertError, AlertSuccess } from "../../../utils/helpers/alertHelper";
import { resetStateAction } from "../../../store/base/action";

type TProps = {
  imageUrl: string
  handleReadFirstVolume: () => void
  title: string
  categoryName: string
  authorName: string
  latestEpisodeUpdate: number
  description: string
  id: string
}

const ComicDetail = ({ imageUrl, handleReadFirstVolume, title, categoryName, authorName, latestEpisodeUpdate, description, id }: TProps) => {

  const dispatch = useDispatch()
  const isCreated = useSelector(isCreatedSelector)
  const user = useSelector(userSelector)

  const handleAddComicToFavorite = ({
    comicTitle,
    comicUrl,
    userId,
    userName,
    comicId
  }: IAddComicToFavorite) => {
    dispatch(addComicToFavoriteAction(comicTitle, comicUrl, userId, userName, comicId))
  }

  // useEffect(() => {
  //   if (isLoading === true) {
  //     AlertWait({
  //       title: "Adding to your favorite..."
  //     })
  //   }
  // }, [isLoading])

  useEffect(() => {
    if (isCreated === true) {
      AlertSuccess({
        title: "Successfully added to your favorite"
      })
    } else if (isCreated === false) {
      AlertError({
        title: "Failed to add comic to your favorite"
      })
    }
    return () => {
      if (isCreated !== undefined) {
        dispatch(resetStateAction())
      }
    }
  }, [isCreated])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-white w-[370px] md:w-[700px] lg:w-[1100px] h-fit bg-opacity-95">
      <div className="p-5 flex flex-col gap-2">
        <img className="h-[500px] object-cover" src={imageUrl} alt="" />
        <Button className="rounded-none bg-orange-600 transition-all" onClick={handleReadFirstVolume}>Read volume 1 now</Button>
      </div>
        <div className="flex flex-col gap-4 p-5 col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-[50px] font-semibold">{title}</h1>
            <div className="text-black flex flex-col gap-3">
              <p className="font-medium">Genre: <span className="text-red-600">{categoryName}</span></p>
              <p className="font-medium">Artist: <span className="text-red-600">{authorName}</span></p>
              <p className="font-medium">Latest update: <span className="text-red-600">{latestEpisodeUpdate}</span></p>
            </div>
            <div className=''>
              <p className="text-black text-justify">{description}</p>
            </div>
          </div>
          <div className="cursor-pointer bg-pink-600 w-fit p-3 rounded-[50px] flex items-center gap-3 hover:bg-pink-500"> 
            <div>
              <FaHeart />
            </div>
            <div>
              <p className="font-bold" onClick={handleAddComicToFavorite.bind(this, {
                comicTitle: title,
                comicUrl: imageUrl,
                userId: user?.id as string,
                userName: `${user?.firstName} ${user?.lastName}`,
                comicId: id
              })}>Add to favorite</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ComicDetail