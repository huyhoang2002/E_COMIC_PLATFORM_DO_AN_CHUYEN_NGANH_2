import { Button } from 'flowbite-react'

type TProps = {
  name: string
}

const CategoryItem = ({ name }: TProps) => {
  return (
    <div className="w-full p-4 bg-gray-700 h-[80px] flex justify-between">
      <div>
        <p className="text-[25px]">{name}</p>
      </div>
      <div className="flex gap-2">
        <Button>Edit</Button>
        <Button className="bg-red-600">Remove</Button>
      </div>
    </div>  
  )
}

export default CategoryItem