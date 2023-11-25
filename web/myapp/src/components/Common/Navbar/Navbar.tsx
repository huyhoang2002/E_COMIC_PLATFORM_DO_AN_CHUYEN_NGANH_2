import { useState } from 'react'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import UserMenuItem from './UserMenuItem/UserMenuItem'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpenResponseMenuBar = () => {
        setIsOpen(!isOpen)
    }

    const navigate = useNavigate()

    return (
        <>
            <div className='py-1 px-10 bg-orange-700 flex flex-col lg:flex-row justify-between fixed z-[10000] w-full'>
                <div className='flex justify-between'>
                    <div onClick={() => navigate("/c")}>
                        <Logo />
                    </div>
                    <div className={`flex items-center`}>
                        <div className={`md:hidden text-white`} onClick={handleOpenResponseMenuBar}>
                            <HiOutlineMenuAlt3 />
                        </div>
                    </div>
                </div>
                <div className={`text-black p-3 flex flex-row items-center gap-2 ${!isOpen && "max-md:hidden"} max-md:justify-center`}>
                    <SearchBar />
                    <UserMenuItem />
                </div>
            </div>
        </>
    )
}

export default Navbar