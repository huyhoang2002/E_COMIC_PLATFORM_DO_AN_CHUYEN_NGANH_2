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
            <div className='w-[100%] py-1 px-10 bg-orange-700 flex justify-between'>
                <Logo />
                <div className={`flex items-center gap-7 max-[500px]:hidden max-[500px]:absolute`}>
                    <SearchBar />
                    <UserMenuItem />
                </div>
                <div className={`flex items-center text-white sm:hidden`} onClick={handleOpenResponseMenuBar}>
                    <HiOutlineMenuAlt3 />
                </div>
            </div>
        </>
    )
}

export default Navbar