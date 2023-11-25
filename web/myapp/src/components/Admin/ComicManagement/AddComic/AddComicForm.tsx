import { Button } from "flowbite-react"
import { useSelector } from "react-redux"
import { authorSelector, categoriesSelector } from "../../../../store/comic/selector"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAuthorAction, getCategoriesAction } from "../../../../store/comic/action"

const AddComicForm = () => {

  const categories = useSelector(categoriesSelector)
  const authors = useSelector(authorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])

  useEffect(() => {
    dispatch(getAuthorAction(false))
  }, [])
  

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
            {authors.map(author => {
              return <option key={author.id}>{author.name}</option>
            })}
            {/* <option>Author 1</option>
            <option>Author 2</option>
            <option>Author 3</option> */}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label>Category</label>
          <select className="text-black">
            {categories.map(category => {
              return (
                <option value="" key={category.id}>{category.categoryName}</option>
              )
            })}
            {/* <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option> */}
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