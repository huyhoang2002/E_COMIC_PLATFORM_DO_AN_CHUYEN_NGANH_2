import { TCategories } from "../../../services/models/category"

type Props = {
    categories: TCategories
}

const CategoryList = ({ categories }: Props) => {
  return (
    <ul className="flex flex-row gap-6">
        {categories.map(category => {
            return <li key={category.id} className="text-white max-md:text-[16px] font-light hover:text-orange-500 transition-all cursor-pointer">
                {category.categoryName}
            </li>
        })}
    </ul>
  )
}

export default CategoryList