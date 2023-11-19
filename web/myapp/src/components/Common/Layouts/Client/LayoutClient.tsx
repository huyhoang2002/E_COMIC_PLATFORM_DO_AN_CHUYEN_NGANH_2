import Navbar from '../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
        <Navbar />
        <div className='py-[50px]'>
          <Outlet />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default LayoutClient