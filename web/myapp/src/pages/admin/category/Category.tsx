import { Button } from "flowbite-react"
import CategoryItem from "../../../components/Admin/CategoryManagement/CategoryItem"

const Category = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Category Management</h1>
        <Button>Add new category</Button>
      </div>
      <div className="flex flex-col gap-1">
        <CategoryItem 
          name="Category 1"
        />
        <CategoryItem 
          name="Category 1"
        />
        <CategoryItem 
          name="Category 1"
        />
      </div>
    </div>
  )
}

export default Category