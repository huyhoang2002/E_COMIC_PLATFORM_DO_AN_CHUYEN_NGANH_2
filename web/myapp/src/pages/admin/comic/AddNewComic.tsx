import AddComicForm from "../../../components/Admin/ComicManagement/AddComic/AddComicForm"
import UploadComicBackground from "../../../components/Admin/ComicManagement/AddComic/UploadComicBackground"
import UploadComicEpisode from "../../../components/Admin/ComicManagement/AddComic/UploadComicEpisode"

const AddNewComic = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-[30px] font-bold text-orange-600'>Create new comic</h1>
      <div className="grid grid-cols-2 gap-2">
        <AddComicForm />
        <div className="flex flex-col gap-3">
          <UploadComicEpisode />
          <UploadComicBackground />
        </div>
      </div>
  </div>
  )
}

export default AddNewComic