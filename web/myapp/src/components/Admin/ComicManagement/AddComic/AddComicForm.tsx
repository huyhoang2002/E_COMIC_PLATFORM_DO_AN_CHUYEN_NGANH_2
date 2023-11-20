import { Button } from "flowbite-react"

const AddComicForm = () => {
  return (
    <div className="w-full h-fit bg-gray-700">
      <form className="w-full h-full p-3 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="">Title</label>
          <input className="text-black" placeholder="title..." type="text" name="" id="" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="">Description</label>
          <textarea placeholder="description..." className="h-[300px] resize-none text-black" name="" id="" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="">Comic image</label>
          <input type="file" name="" id="" />
        </div>
        <div>
          <Button>Upload comic</Button>
        </div>
      </form>
    </div>
  )
}

export default AddComicForm