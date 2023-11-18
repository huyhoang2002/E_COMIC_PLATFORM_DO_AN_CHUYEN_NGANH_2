import { FaArrowRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signInAction } from '../../../../store/auth/action'
import { useForm } from 'react-hook-form'
import { ISignIn } from '../../../../services/models/auth'
import { accessTokenSelector, refreshTokenSelector } from '../../../../store/auth/selector'
import { useEffect } from 'react'
import { saveCredentialToLocalStorage } from '../../../../utils/helpers/localstorageHelper'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accessToken = useSelector(accessTokenSelector)
  const refreshToken = useSelector(refreshTokenSelector)
  const { handleSubmit, register } = useForm<ISignIn>()

  const handleSignIn = handleSubmit((value) => {
    dispatch(signInAction({
      email: value.email,
      password: value.password
    }))
  })

  useEffect(() => {
    if (accessToken !== undefined && refreshToken !== undefined)
      saveCredentialToLocalStorage(accessToken, refreshToken)
  }, [accessToken, refreshToken])

  const handleNavigateToSignUpPage = () => {
    navigate("/sign-up")
  }

  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
      <form onSubmit={handleSignIn} className=" transition-all p-6 bg-gray-700 w-[500px] h-fit flex flex-col gap-[30px] rounded-xl shadow-lg shadow-orange-400">
          <h1 className="transition-transform text-[40px] font-bold text-orange-500">Welcome back</h1>
          <div className="w-full">
              <input {...register("email")} className="w-full h-[60px] rounded-lg text-[17px] text-black" type="text" placeholder="Gmail..."/>
          </div>
          <div className="">
              <input {...register("password")} className="w-full h-[60px] rounded-lg text-[17px] text-black" type="password" placeholder="Password..."/>
          </div>
          <div className="flex justify-between">
            <p className="cursor-pointer font-medium">Forgot password</p>
            <p className="cursor-pointer font-medium" onClick={handleNavigateToSignUpPage}>Sign up</p>
          </div>
          <div className="flex justify-center py-7">
            <button type="submit" className="p-4 bg-orange-600 rounded-2xl h-[70px] w-[80px] hover:bg-orange-500 transition-colors">
              <div className="flex justify-center scale-125">
                <FaArrowRight />
              </div>
            </button>
          </div>
      </form>
    </div>
  )
}

export default LoginForm