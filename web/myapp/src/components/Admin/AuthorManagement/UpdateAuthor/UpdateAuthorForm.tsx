import { Button } from "flowbite-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { IAuthorResponse } from "../../../../services/models/comic"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { authorByIdSelector, isLoadingSelector, isSuccessSelector } from "../../../../store/comic/selector"
import { resetStateAction } from "../../../../store/base/action"
import { getAuthorByIdAction } from "../../../../store/comic/action"
import { useParams } from "react-router-dom"

const UpdateAuthorForm = () => {
  const dispatch = useDispatch()
  const author = useSelector(authorByIdSelector)
  const isSuccess = useSelector(isSuccessSelector)
  const params = useParams()
  const isLoading = useSelector(isLoadingSelector)
  const [ previewImage, setPreviewImage ] = useState<string>()
  const { handleSubmit, getValues, register } = useForm<IAuthorResponse>({
    values: author
  })

  useEffect(() => {
    dispatch(getAuthorByIdAction(params?.authorId as string))
    return () => {
      if (isSuccess === true || isSuccess === false) {
        dispatch(resetStateAction())
      }
    }
  }, [params, isSuccess])

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

export default UpdateAuthorForm