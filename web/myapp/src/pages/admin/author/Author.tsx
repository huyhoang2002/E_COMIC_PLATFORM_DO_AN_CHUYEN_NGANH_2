import { Button } from "flowbite-react"
import AuthorCard from "../../../components/Admin/AuthorManagement/AuthorCard"
import { useNavigate } from "react-router-dom"
import FilterAndSearchBar from "../../../components/Admin/FilterAndSearchBar"

const Author = () => {

  const navigate = useNavigate()

  const handleNavigateToCreateAuthorPage = () => {
    navigate("new-author")
  }

  const handleNavigateToUpdateAuthorPage = () => {
    navigate("update-author")
  }

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Author Management</h1>
        <Button onClick={handleNavigateToCreateAuthorPage}>Add new author</Button>
      </div>
      <FilterAndSearchBar 
        sortElement={
          <div className="flex gap-2 items-center">
            <label htmlFor="">Name</label>
            <input type="checkbox" name="" id="" />
          </div>
        }
        searchDomain="author"
      />
      <div className="flex flex-row gap-3 flex-wrap">
        <AuthorCard 
          name="Huy"
          dateOfBirth={new Date().toDateString()}
          avatarUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5Vy3FsVx6FMWAGbADrJiFA3x0gjnCrPWBi8a7mEAhAL6oObhY"
          onEdit={handleNavigateToUpdateAuthorPage}
        />
        <AuthorCard 
          name="Huy"
          dateOfBirth={new Date().toDateString()}
          avatarUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5Vy3FsVx6FMWAGbADrJiFA3x0gjnCrPWBi8a7mEAhAL6oObhY"
        />
      </div>
    </div>
  )
}

export default Author