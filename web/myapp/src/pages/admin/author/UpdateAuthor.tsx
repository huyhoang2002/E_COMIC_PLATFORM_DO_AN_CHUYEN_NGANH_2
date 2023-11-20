import UpdateAuthorForm from '../../../components/Admin/AuthorManagement/UpdateAuthor/UpdateAuthorForm'

const UpdateAuthor = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-[30px] font-bold text-orange-600'>Update author</h1>
      <UpdateAuthorForm />
    </div>
  )
}

export default UpdateAuthor