import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { getCategoriesAction, getCategoryById } from "../../../store/comic/action"
import { categoriesSelector, categoryDetailSelector, isLoadingSelector, isSuccessSelector } from "../../../store/comic/selector"
import { useParams } from "react-router-dom"
import ComicCard from "../../../components/Common/ComicCard/ComicCard"
import { Spinner } from "flowbite-react"
import { useScroll } from "../../../hooks/UseScroll"

const CategoryDetail = () => {

  const dispatch = useDispatch()
  const categories = useSelector(categoriesSelector)
  const isLoading = useSelector(isLoadingSelector)
  const isSuccess = useSelector(isSuccessSelector)
  const categoryDetail = useSelector(categoryDetailSelector)
  const params = useParams()
  useScroll({ x: 0, y: 0 })

  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getCategoryById(params.id as string))
  }, [dispatch])

  return (
    <div className="py-[60px] px-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
        <div className="flex flex-col gap-[20px] col-span-1">
          <h1 className="text-[30px] font-medium text-orange-500">Category</h1>
          <ul className="flex flex-col gap-[20px] max-h-[400px] overflow-y-auto overflow-hidden">
            {categories.map(category => {
              return (
                <li className="px-[10px] cursor-pointer hover:text-orange-400" key={category.id}>{category.categoryName}</li>
              )
            })}
          </ul>
        </div>
        <div className="col-span-3 flex flex-col gap-[40px]">
          <h1 className="text-3xl font-bold">Result for category: {categoryDetail?.categoryName}</h1>
          <div className="h-[100vh]">
            {isLoading === true ? 
              <div className="flex justify-center items-center">
                <Spinner className="text-orange-600 h-[50px] w-[50px]" />
              </div> : 
              <div className="flex flex-row gap-20 max-md:gap-16 flex-wrap justify-start max-md:justify-center">{categoryDetail?.comics?.map(comic => {
                return (
                  <ComicCard 
                    title={comic.title}
                    modifiedAt={new Date(comic.modifiedAt)}
                    imageUrl={comic.imageUrl}
                    id={comic.id}
                  />
                )
            })}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail