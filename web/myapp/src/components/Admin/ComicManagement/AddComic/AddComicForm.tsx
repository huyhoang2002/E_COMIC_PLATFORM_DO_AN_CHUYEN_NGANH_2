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
        <div className="flex flex-col gap-3 w-fit">
          <label htmlFor="">Comic image</label>
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-col gap-3">
          <label>Author</label>
          <select className="text-black">
            <option>Author 1</option>
            <option>Author 2</option>
            <option>Author 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label>Category</label>
          <select className="text-black">
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>
        <div>
          <Button>Upload comic</Button>
        </div>
      </form>
    </div>
  )
}

export default AddComicForm