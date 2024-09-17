import { Button } from "flowbite-react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { isCreatedSelector, isLoadingSelector, isSuccessSelector } from "../../../../store/comic/selector"
import { useSelector } from "react-redux"
import { addAuthorAction } from "../../../../store/comic/action"
import { useForm } from "react-hook-form"
import { IAddAuthorRequest } from "../../../../services/models/author"
import { AlertError, AlertSuccess, AlertWait } from "../../../../utils/helpers/alertHelper"
import { resetStateAction } from "../../../../store/base/action"

const AddNewAuthorForm = () => {

  const [ previewImage, setPreviewImage ] = useState<string>()
  const { handleSubmit, register } = useForm<IAddAuthorRequest>()
  const dispatch = useDispatch() 
  const isCreated = useSelector(isCreatedSelector)
  const isLoading = useSelector(isLoadingSelector)

  const handleUploadAuthorInfo = handleSubmit((value) => {
    dispatch(addAuthorAction(value.name, value.dateOfBirth, value.description))
  })


  const handleChangeImagePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    var preview = URL.createObjectURL(event.target.files![0])
    setPreviewImage(preview)
  }

  const handleOpenImagePicker = () => {

  }

  const handleRevokeImage = () => {
    URL.revokeObjectURL(previewImage as string)
    setPreviewImage("")
    if (previewImage === "") {
      const authorImage = document.getElementById("author-image") as HTMLInputElement
      authorImage.value = ""
    }
  }

  useEffect(() => {
    if (isLoading === true) {
      AlertWait({
        title: "Loading..."
      })
    }
  }, [isLoading])

  useEffect(() => {
    if (isCreated === false) {
      AlertError({
        title: "Add new author failed"
      })
    } else if (isCreated === true) {
      AlertSuccess({
        title: "Add new author successfully"
      })
    }
    return () => {
      dispatch(resetStateAction())
    }
  }, [isCreated])

  // useEffect(() => {
  //   return () => {
  //     URL.revokeObjectURL(previewImage as string)
  //   }
  // }, [previewImage])

  return (
    <div className="grid grid-cols-1 gap-2">
      <form onSubmit={handleUploadAuthorInfo} className="w-full h-fit bg-gray-700 p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <label htmlFor="">Author name</label>
          <input {...register("name")} className="text-black" placeholder="name..." type="text" />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Date of birth</label>
          <input {...register("dateOfBirth")} className="text-black" type="date" />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Description</label>
          <textarea {...register("description")} className="resize-none h-[300px] text-black" placeholder="description..."/>
        </div>
        <div className="flex gap-2">
          <Button type="submit" className="bg-orange-600">Submit</Button>
          <Button className="bg-orange-600">Reset</Button>
        </div>
      </form>
      {/* <div className="w-full h-full bg-gray-700 gap-3">
        <div>
          <p className="absolute p-3 font-bold text-xl">Upload author image</p>
        </div>
        <form className="flex flex-col gap-3 justify-center items-center h-full">
          <div className="overflow-hidden h-[150px] w-[150px] rounded-[75px]">
            <img src={previewImage} alt="" className="object-cover h-full"/>
          </div>
          <input type="file" name="" id="author-image" onChange={handleChangeImagePicker}/>
          <div>
            <Button onClick={handleOpenImagePicker}>Select image
              <input className="absolute top-0 opacity-0 left-0" type="file" onChange={handleChangeImagePicker}/>
            </Button>
          </div>
          {previewImage && <div className="flex gap-1">
              <Button>Upload</Button>
              <Button className="bg-red-600" onClick={handleRevokeImage}>Cancel</Button>
            </div>}
        </form>
      </div> */}
    </div>
  )
}

export default AddNewAuthorForm