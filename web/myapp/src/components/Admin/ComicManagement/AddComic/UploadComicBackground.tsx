import { Button } from "flowbite-react"

const UploadComicBackground = () => {
  return (
    <div className="p-3 w-full h-[300px] lg:h-full bg-gray-700">
      <div className="absolute">
        <p className="font-bold">Upload background image</p>
      </div>
      <form className="flex justify-center items-center h-full">
        <input type="file" name="" id="" />
        <div>
          <Button type="submit">Upload background image</Button>
        </div>
      </form>
    </div>
  )
}

export default UploadComicBackground