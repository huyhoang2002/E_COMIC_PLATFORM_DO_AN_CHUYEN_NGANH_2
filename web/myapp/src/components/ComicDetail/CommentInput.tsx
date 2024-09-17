import { Spinner, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { commentAction } from "../../store/user/action";
import { IoIosClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoadingCommentSelector, isSuccessCommentSelector, userSelector } from "../../store/user/selector";
import { useEffect, useState } from "react";
import UseDisclosure from "../../hooks/UseDisclosure";
import { HubConnection } from "@microsoft/signalr";
import { getComicCommentAction } from "../../store/comic/action";
import { IUser } from "../../services/models/user";

interface IProps {
  connection: HubConnection | undefined
}

const CommentInput = ({ connection }: IProps) => {
  const dispatch = useDispatch()
  const params = useParams()
  const { handleSubmit, register, formState: { errors }, reset } = useForm<{ comment: string }>()
  const user = useSelector(userSelector)
  const isCommentLoading = useSelector(isLoadingCommentSelector)
  const isCommentSuccess = useSelector(isSuccessCommentSelector)
  const { isOpen, onOpen, onClose } = UseDisclosure()
  const [ isDisabled, setIsDisabled ] = useState(false)
  const { isOpen: isNotificationBarOpen, onOpen: onNotificationBarOpen, onClose: onNotificationBarClose } = UseDisclosure()

  const handleReceviceCommentNotificationAsync = async () => {
    try {
      if (connection?.state.toString() === "Connected") {
        await connection!.invoke("ReceviceCommentNotificationAsync", {
          userId: user?.id,
          comicId: params?.id,
          commentCount: 2
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      if (connection?.state.toString() === "Connected") {
        await connection?.invoke("AddToComicAsync", params?.id)
      }
    })()

    return () => {
      (async () => {
        await connection?.invoke("RemoveFromComicAsync", params?.id)
      })()
    }
  }, [connection, params])

  useEffect(() => {
    if (connection?.state.toString() === "Connected") {
      connection!.on("ReceviceCommentNotificationAsync", (result) => {
        if (result.userId !== user?.id) {
          setTimeout(() => onNotificationBarOpen(), 5000)
        }
      })
    }
  }, [connection, user?.id])

  useEffect(() => {
    setIsDisabled(Object.keys(user as IUser).length === 0)
  }, [user])

  const handleReloadCommentList = () => {
    onNotificationBarClose()
    dispatch(getComicCommentAction(params?.id as string))
  }

  const handleSubmitComment = handleSubmit(async (value) => {
    dispatch(commentAction({
      commentText: value.comment,
      commentImage: "abcd",
      commicId: params?.id as string,
      userAvatar: "abcd",
      userId: `${user?.id}`,
      userName: `${user?.firstName} ${user?.lastName}`
    }))
    await handleReceviceCommentNotificationAsync();
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
    <div className="flex flex-col w-full gap-3">
      <form onSubmit={handleSubmitComment} className="flex items-center px-5">
        <div className="h-[40px] w-[51px] md:w-[40px] bg-red-600 rounded-[20px]"></div>
        <Textarea disabled={isDisabled} {...register("comment", { required: true })} placeholder="comment..." className="flex items-center text-[16px] m-5 rounded-[100px] w-[80%] md:w-[88%] text-black resize-none h-[45px] placeholder:py-0.5 "/>
        {isOpen === true ? <Spinner className="text-orange-600 cursor-pointer rounded-3xl transition-all" /> : <button type="submit" className="text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white p-2 rounded-3xl transition-all"><IoMdSend /></button>}
      </form>
      {isDisabled === true && <p className="text-orange-600 px-5">You have to login to use the feature !</p>}  
      {isNotificationBarOpen && <div className="justify-between items-center p-3 h-[80px] flex w-full bg-orange-300">
        <div className="flex gap-2">
          <p className="font-medium text-black">Reload to see new comments</p>
          <button onClick={handleReloadCommentList} className="text-red-700 font-bold hover:border-b-[1px] border-red-700">reload</button>
        </div>
        <div onClick={handleReloadCommentList}>
          <IoIosClose className="scale-150 text-black"/>
        </div>
      </div>}
    </div>
  )
}

export default CommentInput