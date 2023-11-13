import { useNavigate } from "react-router-dom"

type Props = {
    imageUrl: string
    title: string
    modifiedAt: Date
    id?: string
}

const ComicCard = ({ id, imageUrl, title, modifiedAt }: Props) => {

  const navigate = useNavigate()

  const handleNavigateToComicDetail = (id: string) => {
    navigate(`/c/detail/${id}`)
  }

  return (
    <div 
      className="w-[250px] max-[500px]:w-[400px] h-[400px] hover:scale-125 transition-all" 
      key={id}
      onClick={handleNavigateToComicDetail.bind(this, id as string)}
    >
        <img src={imageUrl} className="h-[300px] w-[300px] object-cover" alt={`this is ${imageUrl}`} />
        <div className="mx-4 mt-2">
            <p className="text-white text-2xl">{title}</p>
            <p className="text-white font-light">Update: {modifiedAt.toDateString()}</p>
        </div>
    </div>
  )
}

export default ComicCard