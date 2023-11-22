import { Button } from "flowbite-react"
import CategoryItem from "../../../components/Admin/CategoryManagement/CategoryItem"
import AddNewCategoryForm from "../../../components/Admin/CategoryManagement/AddCategoryForm/AddNewCategoryForm"
import UseDisclosure from "../../../hooks/UseDisclosure"
import FilterAndSearchBar from "../../../components/Admin/FilterAndSearchBar"

const Category = () => {

  const { isOpen, onClose, onOpen } = UseDisclosure()

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-orange-600">Category Management</h1>
        <Button onClick={onOpen}>Add new category</Button>
      </div>
      <FilterAndSearchBar 
        sortElement={
          <div className="flex gap-2 items-center">
            <label htmlFor="">Name</label>
            <input type="checkbox" name="" id="" />
          </div>
        }
        searchDomain="category"
      />
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
      <AddNewCategoryForm 
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  )
}

export default Category