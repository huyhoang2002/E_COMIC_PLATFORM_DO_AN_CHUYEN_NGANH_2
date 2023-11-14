import { Textarea } from "flowbite-react";
import { IoMdSend } from "react-icons/io";

const CommentInput = () => {
  return (
    <div className="flex items-center px-5">
      <div className="h-[40px] w-[51px] md:w-[40px] bg-red-600 rounded-[20px]"></div>
      <Textarea placeholder="comment..." className="m-5 rounded-[100px] w-[80%] md:w-[88%] text-black resize-none h-[45px] placeholder:py-0.5 "/>
      <div className="text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white p-2 rounded-3xl transition-all"><IoMdSend /></div>
    </div>  
  )
}

export default CommentInput