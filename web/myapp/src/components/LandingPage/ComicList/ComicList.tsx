import { useSelector } from "react-redux"
import { categoriesSelector, comicsSelector, isLoadingSelector, isSuccessSelector } from "../../../store/comic/selector"
import { useEffect } from "react"
import { getCategoriesAction, getComicAction } from "../../../store/comic/action"
import ComicCard from "../../Common/ComicCard/ComicCard"
import Container from "../../Common/Container/Container"
import CategoryList from "../CategoryList/CategoryList"
import Pagination from "../Pagination/Pagination"
import { Spinner } from 'flowbite-react'
import { useDispatch } from "react-redux"
import { AnyAction, Dispatch } from "redux"

const ComicList = () => {
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const comics = useSelector(comicsSelector)
    const categories = useSelector(categoriesSelector)
    const isLoading = useSelector(isLoadingSelector)
    const isSuccess = useSelector(isSuccessSelector)
    
    useEffect(() => {
        dispatch(getComicAction({
            isDeleted: false,
            pageIndex: 1,
            pageSize: 20,
        }))
    }, [isSuccess, dispatch])

    useEffect(() => {
        if (isSuccess === undefined) {
            dispatch(getCategoriesAction())
        }
    }, [dispatch, isSuccess])
  return (
    <Container mt="mt-[10px]">
        <div className="flex max-[768px]:flex-col w-full items-center h-[300px] justify-between">
            <div>
                <h1 className="text-white font-bold text-[70px] leading-[4rem]">LATEST COMIC UPDATE</h1>
            </div>
            <div className="max-w-300px">
                <CategoryList 
                    categories={categories}
                />
            </div>
        </div>
        {isLoading ? <div className="flex w-full justify-center items-center"><Spinner className="text-orange-600 h-[50px] w-[50px]" /></div> : <div className="flex flex-row mt-[50px] gap-28 max-md:gap-16 flex-wrap justify-start max-md:justify-center">
            {comics?.map(comic => {
                return (
                    <ComicCard 
                        id={comic.id}
                        title={comic.title}
                        imageUrl={comic.imageUrl}
                        modifiedAt={new Date(comic.modifiedAt)}
                    />
                )
            })}
        </div>}
        <Pagination />
    </Container>
  )
}

export default ComicList