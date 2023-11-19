import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ISignUp } from '../../../../services/models/auth'
import { useDispatch, useSelector } from 'react-redux'
import { signUpAction } from '../../../../store/auth/action'
import { isSuccessSelector } from '../../../../store/auth/selector'
import { useEffect } from 'react'
import { AlertSuccess } from '../../../../utils/helpers/alertHelper'
import { resetStateAction } from '../../../../store/base/action'

const RegisterForm = () => {

  const { register, handleSubmit } = useForm<ISignUp>() 

  const navigate = useNavigate()
  const handleNavigateBackToLogin = () => {
    navigate("/sign-in")
  }
  const isSuccess = useSelector(isSuccessSelector)
  const dispatch = useDispatch()

  const handleRegister = handleSubmit(value => {
    dispatch(signUpAction({
      ...value,
      role: "USER"
    }))
  })

  useEffect(() => {
    if (isSuccess === true) {
      AlertSuccess({
        title: "Create account successfully"
      })
      navigate("/sign-in")
      dispatch(resetStateAction())
    }
    return () => {
      dispatch(resetStateAction())
    }
  }, [isSuccess])

  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
      <form onSubmit={handleRegister} className=" transition-all p-6 bg-gray-700 w-[500px] h-fit flex flex-col gap-[30px] rounded-xl shadow-lg shadow-orange-400">
          <h1 className="transition-transform text-[40px] font-bold text-orange-500">Type your information</h1>
          <div className="">
              <input {...register("userName")} className="w-full h-[60px] rounded-lg text-[17px] text-black" type="text" placeholder="Username..."/>
          </div>
          <div className="">
              <input {...register("email")} className="w-full h-[60px] rounded-lg text-[17px] text-black" type="text" placeholder="Gmail..."/>
          </div>
          <div className="">
              <input {...register("password")} className="w-full h-[60px] rounded-lg text-[17px] text-black" type="password" placeholder="Password..."/>
          </div>
          <div className="">
            <p className="cursor-pointer font-medium" onClick={handleNavigateBackToLogin}>Back to login</p>
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

export default RegisterForm