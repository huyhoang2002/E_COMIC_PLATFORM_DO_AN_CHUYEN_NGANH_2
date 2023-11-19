import { useState } from 'react'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import UserMenuItem from './UserMenuItem/UserMenuItem'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { isSuccessSelector } from '../../../store/user/selector'

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const isSuccess = useSelector(isSuccessSelector)

    const handleOpenResponseMenuBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='py-1 px-10 bg-orange-700 flex justify-between fixed z-[10000] w-full'>
                <Logo />
                <div className={`flex items-center`}>
                    <div className={`md:hidden text-white`} onClick={handleOpenResponseMenuBar}>
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>
                <div className={`text-black max-sm:bg-orange-600  p-3 flex items-center gap-2 ${!isOpen ? "max-md:hidden" : "max-md:absolute"} top-[100px] z-[1000] max-md:justify-center`}>
                    <SearchBar />
                    <UserMenuItem />
                </div>
            </div>
        </>
    )
}

export default Navbar