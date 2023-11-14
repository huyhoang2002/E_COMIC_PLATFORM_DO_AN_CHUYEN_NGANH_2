import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
        <Navbar />
        <div className='mb-[480px]'>
          <Outlet />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default LayoutClient