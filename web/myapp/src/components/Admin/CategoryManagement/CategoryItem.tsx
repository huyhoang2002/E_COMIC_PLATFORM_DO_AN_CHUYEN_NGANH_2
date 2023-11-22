import { Button } from 'flowbite-react'
import UseDisclosure from '../../../hooks/UseDisclosure'
import UpdateCategoryForm from './UpdateCategoryForm/UpdateCategoryForm'

type TProps = {
  name: string
}

const CategoryItem = ({ name }: TProps) => {

  const { onOpen, isOpen, onClose } = UseDisclosure()

  return (
    <>
      <div className="w-full p-4 bg-gray-700 h-[80px] flex justify-between">
        <div>
          <p className="text-[25px]">{name}</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={onOpen}>Edit</Button>
          <Button className="bg-red-600">Remove</Button>
        </div>
      </div>  
      <UpdateCategoryForm 
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default CategoryItem