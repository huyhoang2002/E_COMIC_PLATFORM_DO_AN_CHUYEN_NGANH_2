import { useParams } from "react-router-dom"
import ComicDetail from "../../../../components/Admin/ComicManagement/ComicDetail/ComicDetail"

const ComicDetailPage = () => {

  const params = useParams()

  return (
    <div>
      <h1 className="text-[30px] font-bold text-orange-600">Comic detail {params?.id}</h1>
      <div className="flex h-[120vh] pt-[150px] flex-col gap-3 items-center">
        <ComicDetail 
          title="Naruto"
          authorName="Hoang Le Huy"
          categoryName="Hanh dong"
          description="this is naruto"
          imageUrl=""
          latestEpisodeUpdate={20}
        />
      </div>
    </div>
  )
}

export default ComicDetailPage