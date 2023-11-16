import { Button } from 'flowbite-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { getComicByIdAction } from '../../store/comic/action'
import { comicSelector, episodesSelector } from '../../store/comic/selector'

const ComicInfo = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()
  const comic = useSelector(comicSelector)
  const episode = useSelector(episodesSelector)

  useEffect(() => {
    dispatch(getComicByIdAction(params?.id as string))
  }, [params.id])

  const navigateToCommentList = () => {
    navigate(`/c/detail/${params?.id}/comment`)
  }

  const navigateToVolList = () => {
    navigate(`/c/detail/${params?.id}/vol`)
  }

  return (
    <>
      <div className="flex h-[120vh] pt-[150px] flex-col gap-3 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gri bg-white w-[370px] md:w-[700px] lg:w-[1100px] h-fit bg-opacity-95">
          <div className="p-5 flex flex-col gap-2">
            <img className="h-[500px] object-cover" src={comic?.imageUrl} alt="" />
            <Button className="rounded-none bg-orange-600 transition-all">Read volume 1 now</Button>
          </div>
          <div className="flex flex-col gap-4 p-5 col-span-2">
            <h1 className="text-black text-[50px] font-semibold">{comic?.title}</h1>
            <div className="text-black flex flex-col gap-3">
              <p className="font-medium">Genre: <span className="text-red-600">{comic?.category.categoryName}</span></p>
              <p className="font-medium">Artist: <span className="text-red-600">{comic?.author.name}</span></p>
              <p className="font-medium">Latest update: <span className="text-red-600">{episode.length}</span></p>
            </div>
            <div className=''>
              <p className="text-black text-justify">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
            </div>
          </div>
        </div>
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