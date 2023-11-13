import { useState } from 'react'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import UserMenuItem from './UserMenuItem/UserMenuItem'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpenResponseMenuBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='py-1 px-10 bg-orange-700 flex justify-between fixed z-[1000] w-full'>
                <Logo fontSize='lg'/>
                <div className={`flex items-center`}>
                    <div className={`md:hidden text-white`} onClick={handleOpenResponseMenuBar}>
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>
                <div className={`flex items-center gap-0 ${!isOpen ? "max-md:hidden" : "max-md:absolute"} top-[100px] z-[1000] max-md:justify-center`}>
                    <SearchBar />
                    <UserMenuItem />
                </div>
            </div>
        </>
    )
}

export default Navbar