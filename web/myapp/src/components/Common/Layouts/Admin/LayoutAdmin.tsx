import { Outlet, useNavigate } from "react-router-dom"
import Logo from "../../Navbar/Logo/Logo"
import SidebarItem from "../../Sidebar/SidebarItem"
import SidebarItemGroupVertical from "../../Sidebar/SidebarItemGroupVertical"

const LayoutAdmin = () => {

  const navigate = useNavigate()

  const handleNavigate = (routeName: string) => {
    navigate(routeName)
  }

  return (
    <div className="grid grid-cols-6">
      <div className="p-3 flex flex-col gap-3 bg-gray-800">
        <Logo />
        <div className="flex flex-col justify-between h-full">
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