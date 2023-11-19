import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isSuccessSelector, messageSelector, userSelector } from '../../../../store/user/selector'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfoAction } from '../../../../store/user/action'
import useToken from '../../../../hooks/useToken'
import UseDisclosure from '../../../../hooks/UseDisclosure'
import { resetStateAction } from '../../../../store/base/action'
import { signOutAction } from '../../../../store/auth/action'
import { removeCredential } from '../../../../utils/helpers/localstorageHelper'

const UserMenuItem = () => {

  const navigation = useNavigate()
  const user = useSelector(userSelector)
  const isSuccess = useSelector(isSuccessSelector)
  const { isOpen, onToggle } = UseDisclosure()
  const [ accessToken ] = useToken()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfoAction())
    return () => {
      if (isSuccess === true) {
        dispatch(resetStateAction())
      }
    }
  }, [dispatch, isSuccess, accessToken])

  const handleNavigateToSignInPage = () => {
    navigation("/sign-in")
  }

  const handleNavigateToProfilePage = () => {
    navigation("profile")
  }

  const handleSignOut = () => {
    dispatch(signOutAction())
    removeCredential()
    location.reload()
  }

  // useEffect(() => {
  //   if (isSuccess === false) {
  //     AlertWarning({
  //       title: "Your session has been expired or your profile does not exist"
  //     })
  //   }
  //   return () => {
  //     if (isSuccess === true || isSuccess === false) {
  //       dispatch(resetStateAction())
  //     }
  //   }
  // }, [isSuccess])

  return (
    <>
      {isSuccess === false ? <div className='rounded-[20px] hover:bg-orange-300 transition-all p-3' onClick={handleNavigateToSignInPage}>
        <FaUserAlt style={{ color: "white" }} /> 
      </div> :
      <div className='relative'>
        <p onClick={onToggle} className='rounded-[20px] hover:bg-orange-500 transition-all p-3 cursor-pointer text-white font-medium'>{user?.firstName} {user?.lastName}</p>
        <div className={`flex flex-col gap-3 ${isOpen ? "absolute" : "hidden"} w-[400px] h-fit p-3 bg-gray-800 mt-[17px] right-0`}>
          <div className='p-3 flex gap-3 items-center bg-gray-600 cursor-pointer hover:bg-gray-500 rounded-md' onClick={handleNavigateToProfilePage}>
            <div className='rounded-3xl bg-black w-[40px] h-[40px]'></div>
            <div className='text-white font-medium'>{user?.firstName} {user?.lastName}</div>
          </div>
          <div className='p-3 rounded-md bg-gray-600 cursor-pointer hover:bg-gray-500'>
            <p className='font-medium text-white'>Edit profile</p>
          </div>
          <div className='p-3 rounded-md bg-red-600 cursor-pointer hover:bg-red-500' onClick={handleSignOut}>
            <p className='font-medium text-white'>Sign out</p>
          </div>
        </div>  
      </div>}
    </>
  )
}

export default UserMenuItem