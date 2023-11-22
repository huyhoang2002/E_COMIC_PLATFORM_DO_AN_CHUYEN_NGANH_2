import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import ComicTable from "../../../components/Admin/ComicManagement/ComicTable"
import FilterAndSearchBar from "../../../components/Admin/FilterAndSearchBar"

const Comic = () => {

  const navigate = useNavigate()

  const handleNavigateToComicPage = () => {
    navigate("new-comic")
  }

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Comic Management</h1>
        <Button onClick={handleNavigateToComicPage}>Add new comic</Button>
      </div>
      <FilterAndSearchBar 
        sortElement={
          <>
            <div className="flex gap-2 items-center">
              <label htmlFor="">Name</label>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="">Latest update</label>
              <input type="checkbox" name="" id="" />
            </div>
          </>
        }
        searchDomain="comic"
      />
      <div>
        <ComicTable />
      </div>
    </div>
  )
}

export default Comic