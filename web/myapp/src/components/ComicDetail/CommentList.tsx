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

  useEffect(() => {
    dispatch(getComicCommentAction(params?.id as string))
  }, [params.id])

  return (
    <div className="grid grid-cols-1 gap-6 text-black p-5 max-h-[360px] overflow-hidden overflow-y-auto">
      {comments.map(comment => {
        return (
          <div className="flex flex-col gap-4" key={comment.id}>
            <div className="flex gap-3">
              <div className="h-[40px] w-[40px] bg-red-600 rounded-[20px]"></div>  
              <div>
                <div className="p-3 rounded-[20px] bg-gray-200 max-w-[250px] md:max-w-[530px] lg:max-w-[982px]">
                  <div className="text-[15px] font-medium">
                    <p>{comment.userName}</p>
                  </div>
                  <div className="text-[14px]">
                    <p>{comment.commentText}</p>
                  </div>
                </div>
                <div className="pl-[5px] text-[13px]">
                  <p>{new Date(comment.modifiedDate).toDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentList