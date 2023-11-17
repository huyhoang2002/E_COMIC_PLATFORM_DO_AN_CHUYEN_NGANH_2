import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const handleNavigateBackToLogin = () => {
    navigate("/sign-in")
  }
 
  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
      <form className=" transition-all p-6 bg-gray-700 w-[500px] h-fit flex flex-col gap-[30px] rounded-xl shadow-lg shadow-orange-400">
          <h1 className="transition-transform text-[40px] font-bold text-orange-500">Type your information</h1>
          <div className="">
              <input className="w-full h-[60px] rounded-lg text-[17px] text-black" type="text" name="" id="" placeholder="Username..."/>
          </div>
          <div className="">
              <input className="w-full h-[60px] rounded-lg text-[17px] text-black" type="text" name="" id="" placeholder="Gmail..."/>
          </div>
          <div className="">
              <input className="w-full h-[60px] rounded-lg text-[17px] text-black" type="password" name="" id="" placeholder="Password..."/>
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