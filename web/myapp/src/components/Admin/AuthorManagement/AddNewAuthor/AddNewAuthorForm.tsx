import { Button } from "flowbite-react"
import { useEffect, useState } from "react"

const AddNewAuthorForm = () => {

  const [ previewImage, setPreviewImage ] = useState<string>()

  const handleChangeImagePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    var preview = URL.createObjectURL(event.target.files![0])
    setPreviewImage(preview)
  }

  const handleRevokeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    URL.revokeObjectURL(previewImage as string)
    setPreviewImage("")
    event.target.value = ""
  }

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(previewImage as string)
    }
  }, [previewImage])

  return (
    <div className="grid grid-cols-2 gap-2">
      <form className="w-full h-fit bg-gray-700 p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <label htmlFor="">Author name</label>
          <input className="text-black" placeholder="name..." type="text" />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Date of birth</label>
          <input className="text-black" type="date" />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Description</label>
          <textarea className="resize-none h-[300px] text-black" placeholder="description..."/>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-600">Submit</Button>
          <Button className="bg-orange-600">Reset</Button>
        </div>
      </form>
      <div className="w-full h-full bg-gray-700 gap-3">
        <div>
          <p className="absolute p-3 font-bold text-xl">Upload author image</p>
        </div>
        <form className="flex flex-col gap-3 justify-center items-center h-full">
          <div className="overflow-hidden h-[150px] w-[150px] rounded-[75px]">
            <img src={previewImage} alt="" className="object-cover h-full"/>
          </div>
          <input type="file" name="" id="" onChange={handleChangeImagePicker}/>
          {previewImage && <div className="flex gap-1">
              <Button>Upload</Button>
              <Button className="bg-red-600">Cancel</Button>
            </div>}
        </form>
      </div>
    </div>
  )
}

export default AddNewAuthorForm