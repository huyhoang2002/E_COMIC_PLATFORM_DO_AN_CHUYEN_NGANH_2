import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='relative flex flex-col gap-[50px]'>
        <Navbar />
        <div className='py-[50px] flex flex-col'>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default LayoutClient