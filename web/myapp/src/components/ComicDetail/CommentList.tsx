import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { commentSelector } from "../../store/comic/selector"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getComicCommentAction } from "../../store/comic/action"

const CommentList = () => {

  const dispatch = useDispatch()
  const comments = useSelector(commentSelector)
  const params = useParams()

  console.log(params.id)

  useEffect(() => {
    dispatch(getComicCommentAction(params?.id as string))
  }, [params.id])

  console.log(comments)

  return (
    <div className="grid grid-cols-1 gap-6 text-black p-5 max-h-[250px] overflow-hidden overflow-y-auto">
      {comments.map(comment => {
        return (
          <div className="flex gap-4">
            <div className="h-[40px] w-[40px] bg-red-600 rounded-[20px]"></div>  
            <div className="p-3 rounded-[20px] bg-gray-200 max-w-[250px] md:max-w-[530px] lg:max-w-[982px]">
              <div className="text-[15px] font-medium">
                <p>{comment.userName}</p>
              </div>
              <div className="text-[14px]">
                <p>{comment.commentText}</p>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="flex gap-4">
        <div className="h-[40px] w-[40px] bg-red-600 rounded-[20px]"></div>  
        <div className="p-3 rounded-[20px] bg-gray-200 max-w-[250px] md:max-w-[530px] lg:max-w-[982px]">
          <div className="text-[15px] font-medium">
            <p>Hoang Le Huy</p>
          </div>
          <div className="text-[14px]">
            <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CommentList