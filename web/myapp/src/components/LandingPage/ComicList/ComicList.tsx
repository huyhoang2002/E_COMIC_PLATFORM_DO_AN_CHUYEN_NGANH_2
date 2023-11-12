import { useDispatch, useSelector } from "react-redux"
import { categoriesSelector, comicsSelector } from "../../../store/comic/selector"
import { useEffect } from "react"
import { getCategoriesAction, getComicAction } from "../../../store/comic/action"
import ComicCard from "../../Common/ComicCard/ComicCard"
import Container from "../../Common/Container/Container"

const ComicList = () => {
    const dispatch = useDispatch()
    const comics = useSelector(comicsSelector)
    const categories = useSelector(categoriesSelector)
    
    useEffect(() => {
        dispatch(getComicAction({
            isDeleted: false,
            pageIndex: 1,
            pageSize: 20,
        }))
    }, [dispatch])

    useEffect(() => {
        dispatch(getCategoriesAction())
    }, [dispatch])
  return (
    <Container mt="mt-[10px]">
        <div className="flex max-[500px]:flex-col w-full items-center h-[300px] justify-between">
            <h1 className="text-white font-bold text-[70px]">LATEST COMIC UPDATE</h1>
            <div className="max-w-300px">
                <ul className="flex flex-row gap-6">
                    {categories.map(category => {
                        return <li className="text-white font-light hover:text-orange-500 transition-all cursor-pointer" key={category.id}>
                            {category.categoryName}
                        </li>
                    })}
                </ul>
            </div>
        </div>
        <div className="flex flex-row mt-[50px] gap-28 max-[500px]:gap-16 flex-wrap justify-start">
            {comics.map(comic => {
                return (
                    <ComicCard 
                        id={comic.id}
                        title={comic.title}
                        imageUrl={comic.imageUrl}
                        modifiedAt={new Date(comic.modifiedAt)}
                    />
                )
            })}
        </div>
    </Container>
  )
}

export default ComicList