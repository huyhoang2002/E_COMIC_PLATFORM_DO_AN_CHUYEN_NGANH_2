import { FaSearch } from 'react-icons/fa' 
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchResultSelector } from '../../../../store/comic/selector'
import { useCallback, useEffect, useState } from 'react'
import { searchComicAction } from '../../../../store/comic/action'
import { useNavigate } from 'react-router-dom'
import UseDisclosure from '../../../../hooks/UseDisclosure'
import { resetStateAction } from '../../../../store/base/action'

const SearchBar = () => {

  const [ keyword, setKeyword ] = useState("")
  const { isOpen, onOpen, onClose } = UseDisclosure()
  const searchResults = useSelector(searchResultSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleNavigateToComic = (id: string) => {
    navigate(`detail/${id}`)
    setKeyword("")
  } 

  const handleNavigateToSearchResult = (keyword: string) => {
    navigate(`search-result?keyword=${keyword}`)
  }

  useEffect(() => {
    dispatch(searchComicAction(keyword, 1, 20))
  }, [keyword])

  return (
    <div>
        <div className="relative">
            <input value={keyword} onChange={handleChangeKeyword} onFocus={onOpen} placeholder="Search..." className="px-2 h-10 w-[310px] sm:w-[550px] md:w-[700px] lg:w-[500px] outline-orange-500 rounded-[20px]" type="text" />
            <div className='absolute right-0 top-3 mr-5'><FaSearch style={{ color: "#f97316"}}/></div>
        </div>
        {keyword.length > 0 && <div className='absolute bg-gray-800 w-[310px] md:w-[500px] min-h-[60px] mt-5'>
          <div className='w-full p-5 border-b-[1px] border-orange-600' onClick={handleNavigateToSearchResult.bind(this, keyword)}>
            <p className='text-white font-medium cursor-pointer'>Search for {keyword}...</p>
          </div>
          {searchResults.length !== 0 && searchResults.map(result => {
            return (
              <div className='w-full p-5 border-b-[1px] border-orange-600' key={result.id} onClick={handleNavigateToComic.bind(this, result.id)}>
                <p className='text-white font-medium cursor-pointer'>{result.title}</p>
              </div>
            )
          })}
        </div>}
    </div>
  )
}

export default SearchBar