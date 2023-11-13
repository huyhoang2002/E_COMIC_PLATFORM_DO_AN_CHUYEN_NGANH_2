import Navbar from '../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default LayoutClient