import { Button } from "flowbite-react"
import AuthorCard from "../../../components/Admin/AuthorManagement/AuthorCard"
import { useNavigate, useSearchParams } from "react-router-dom"
import FilterAndSearchBar from "../../../components/Admin/FilterAndSearchBar"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { authorSelector, isSuccessSelector } from "../../../store/comic/selector"
import { useEffect } from "react"
import { getAuthorAction } from "../../../store/comic/action"
import { resetStateAction } from "../../../store/base/action"

const Author = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authors = useSelector(authorSelector)
  const isSuccess = useSelector(isSuccessSelector)
  const [ searchParams, setSearchParams ] = useSearchParams()
  const isDeleted = searchParams.get("isDeleted")
  const keyword = searchParams.get("keyword") as string | undefined 

  useEffect(() => {
    dispatch(getAuthorAction(Boolean(isDeleted), keyword))
    return () => {
      if (isSuccess === true) {
        dispatch(resetStateAction())
      }
    }
  }, [dispatch, searchParams, keyword, isSuccess])

  const handleChangeKeyword = (value: string) => {
    setSearchParams({
      ...searchParams,
      keyword: value
    })
  }

  const handleNavigateToCreateAuthorPage = () => {
    navigate("new-author")
  }

  const handleNavigateToUpdateAuthorPage = (authorId: string) => {
    navigate(`update-author/${authorId}`)
  }

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Author Management</h1>
        <Button onClick={handleNavigateToCreateAuthorPage}>Add new author</Button>
      </div>
      <FilterAndSearchBar 
        handleChangeKeyword={handleChangeKeyword}
        sortElement={
          <div className="flex gap-2 items-center">
            <label htmlFor="">Name</label>
            <input type="checkbox" name="" id="" />
          </div>
        }
        searchDomain="author"
      />
      <div className="flex flex-row gap-3 flex-wrap">
        {authors.map(author => {
          return (
            <AuthorCard 
              name={author.name}
              dateOfBirth={new Date(author.dateOfBirth).toDateString()}
              avatarUrl={author.avatarImage as string}
              onEdit={handleNavigateToUpdateAuthorPage.bind(this, author.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Author