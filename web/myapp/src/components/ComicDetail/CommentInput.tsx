import { Spinner, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { commentAction } from "../../store/user/action";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoadingCommentSelector, isSuccessCommentSelector, userSelector } from "../../store/user/selector";
import { useEffect } from "react";
import UseDisclosure from "../../hooks/UseDisclosure";

const CommentInput = () => {

  const dispatch = useDispatch()
  const params = useParams()
  const { handleSubmit, register, formState: { errors }, reset } = useForm<{ comment: string }>()
  const user = useSelector(userSelector)
  const isCommentLoading = useSelector(isLoadingCommentSelector)
  const isCommentSuccess = useSelector(isSuccessCommentSelector)
  const { isOpen, onOpen, onClose } = UseDisclosure()

  const handleSubmitComment = handleSubmit(value => {
    dispatch(commentAction({
      commentText: value.comment,
      commentImage: "abcd",
      commicId: params?.id as string,
      userAvatar: "abcd",
      userId: `${user?.id}`,
      userName: `${user?.firstName} ${user?.lastName}`
    }))
    reset()
  })

  useEffect(() => {
    if (isCommentLoading === true) {
      onOpen()
    }
    if (isCommentSuccess === true || isCommentSuccess === false) {
      onClose()
    }
  }, [isCommentSuccess, isCommentLoading])

  return (
    <form onSubmit={handleSubmitComment} className="flex items-center px-5">
      <div className="h-[40px] w-[51px] md:w-[40px] bg-red-600 rounded-[20px]"></div>
      <Textarea {...register("comment", { required: true })} placeholder="comment..." className="m-5 rounded-[100px] w-[80%] md:w-[88%] text-black resize-none h-[45px] placeholder:py-0.5 "/>
      {isOpen === true ? <Spinner className="text-orange-600 cursor-pointer rounded-3xl transition-all" /> : <button type="submit" className="text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white p-2 rounded-3xl transition-all"><IoMdSend /></button>}
    </form>  
  )
}

export default CommentInput