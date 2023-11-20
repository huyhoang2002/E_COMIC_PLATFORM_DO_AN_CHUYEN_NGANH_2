import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"

const Comic = () => {

  const navigate = useNavigate()

  const handleNavigateToComicPage = () => {
    navigate("new-comic")
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Comic Management</h1>
        <Button onClick={handleNavigateToComicPage}>Add new comic</Button>
      </div>
    </div>
  )
}

export default Comic