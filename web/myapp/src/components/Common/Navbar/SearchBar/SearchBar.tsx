import { FaSearch } from 'react-icons/fa' 

const SearchBar = () => {
  return (
    <div>
        <div className="relative">
            <input placeholder="Search..." className="px-2 h-10 w-[500px] max-[500px]:w-[390px] outline-orange-500 rounded-[20px]" type="text" name="" id="" />
            <div className='absolute right-0 top-3 mr-5'><FaSearch style={{ color: "#f97316"}}/></div>
        </div>
    </div>
  )
}

export default SearchBar