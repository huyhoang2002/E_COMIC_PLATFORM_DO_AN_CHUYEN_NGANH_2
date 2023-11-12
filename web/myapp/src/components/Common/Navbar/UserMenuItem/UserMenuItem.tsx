import { FaUserAlt } from 'react-icons/fa'

const UserMenuItem = () => {
  return (
    <div className='rounded-[20px] hover:bg-orange-300 transition-all p-3'>
        <FaUserAlt style={{ color: "white" }} />
    </div>
  )
}

export default UserMenuItem