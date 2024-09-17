import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { isLoadingSelector, isSuccessSelector, searchResultSelector } from "../../../store/comic/selector"
import ComicCard from "../../../components/Common/ComicCard/ComicCard"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { searchComicAction } from "../../../store/comic/action"
import { Spinner } from "flowbite-react"
import { useScroll } from "../../../hooks/UseScroll"

const SearchResult = () => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const searchResult = useSelector(searchResultSelector)
    const isSuccess = useSelector(isSuccessSelector)
    const isLoading = useSelector(isLoadingSelector)
    const dispatch = useDispatch()
    useScroll({
        x: 0,
        y: 0
    })

    const handleChangeSearchParams = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            ...searchParams,
            keyword: event.target.value
        })
    }

    useEffect(() => {
        dispatch(searchComicAction(keyword as string, 1, 20))
    }, [dispatch, keyword])

    return (
        <div className="px-[60px] pt-[60px]">
            <div className="grid grid-cols-4 gap-[50px]">
                <div className="col-span-1 flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[10px]">
                        <p>Search: </p>
                        <input value={keyword?.toString()} onChange={handleChangeSearchParams} placeholder="search..." className="text-black border-orange-500 w-full" type="text" name="" id="" />
                    </div>
                    <div>
                        <h1>Filter</h1>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-[25px] h-[100vh]">
                    {isLoading === true ? <div className="flex justify-center items-center h-full">
                        <Spinner className="text-orange-600 h-[50px] w-[50px]"/>
                    </div> :
                    <>
                        <h1 className="text-xl font-medium">{searchResult?.length} Result for: {keyword}</h1>
                        {searchResult.length <= 0 ? <div className="flex w-full h-full justify-center items-center">
                            <h1 className="text-[30px] text-orange-500 font-light">No comic found !</h1>
                        </div> : <div>
                            {searchResult?.map(result => {
                                return (
                                    <ComicCard 
                                        title={result.title}
                                        imageUrl={result.imageUrl}
                                        modifiedAt={new Date(result.modifiedAt)}
                                        id={result.id}
                                    />
                                )
                            })}
                        </div>}
                    </>}
                </div>
            </div>
        </div>
    )
}

export default SearchResult