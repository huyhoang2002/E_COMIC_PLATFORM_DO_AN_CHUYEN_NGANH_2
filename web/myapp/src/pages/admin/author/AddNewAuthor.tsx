import AddNewAuthorForm from '../../../components/Admin/AuthorManagement/AddNewAuthor/AddNewAuthorForm'

const AddNewAuthor = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-[30px] font-bold text-orange-600'>Create new author</h1>
      <AddNewAuthorForm />
    </div>
  )
}

export default AddNewAuthor