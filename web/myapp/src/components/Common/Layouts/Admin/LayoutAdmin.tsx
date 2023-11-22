import { Outlet, useNavigate } from "react-router-dom"
import Logo from "../../Navbar/Logo/Logo"
import SidebarItem from "../../Sidebar/SidebarItem"
import SidebarItemGroupVertical from "../../Sidebar/SidebarItemGroupVertical"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import UseDisclosure from "../../../../hooks/UseDisclosure"

const LayoutAdmin = () => {

  const navigate = useNavigate()
  const { isOpen, onToggle } = UseDisclosure()

  const handleNavigate = (routeName: string) => {
    navigate(routeName)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <div className="lg:p-3 p-0 flex flex-col gap-3 bg-gray-800 primary">
        <div className="p-3 flex justify-between items-center">
          <Logo />
          <div className="lg:hidden" onClick={onToggle}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
        <div className={`lg:flex-col justify-between lg:h-full max-lg:absolute max-lg:top-[100px] max-lg:p-[0px] max-lg:bg-gray-800 max-lg:w-full max-lg:z-[1000] ${!isOpen && "hidden transition-all"} lg:flex`}>
          <SidebarItemGroupVertical>
            <SidebarItem itemName="Author" onClick={handleNavigate.bind(this, "author")}/>
            <SidebarItem itemName="Category" onClick={handleNavigate.bind(this, "category")}/>
            <SidebarItem itemName="Comic" onClick={handleNavigate.bind(this, "comic")}/>
            <SidebarItem itemName="User" onClick={handleNavigate.bind(this, "user")}/>
          </SidebarItemGroupVertical>
          <div>
            <div className="p-4 cursor-pointer hover:bg-red-700">
              <p className="font-bold">Sign out</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 col-span-5 h-[100vh] w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin