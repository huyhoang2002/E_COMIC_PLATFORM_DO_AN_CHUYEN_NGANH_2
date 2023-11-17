import RegisterForm from "./RegisterForm"

const Register = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-900">
      <div className="h-[100vh] w-full hidden lg:block">
        <img className="h-full object-cover" src="https://images.alphacoders.com/811/thumb-1920-811085.jpg" alt="" />
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register