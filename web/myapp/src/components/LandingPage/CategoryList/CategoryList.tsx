import { useNavigate } from "react-router-dom"
import { TCategories } from "../../../services/models/category"

type Props = {
    categories: TCategories
}

const CategoryList = ({ categories }: Props) => {

  const navigate = useNavigate()

  const handleNavigateToCategoryDetail = (id: string) => {
    navigate(`category/${id}`)
  }

  return (
    <ul className="flex flex-row gap-6">
        {categories?.map(category => {
            return <li onClick={handleNavigateToCategoryDetail.bind(this, category.id)} key={category.id} className="text-white max-md:text-[16px] font-light hover:text-orange-500 transition-all cursor-pointer">
                {category.categoryName}
            </li>
        })}
    </ul>
  )
}

export default CategoryList