import LoginForm from "./LoginForm"

const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-900">
      <div className="hidden lg:block">
        <img src="https://wallpapers.com/images/hd/avengers-background-exiwskvwpe4rhm89.jpg" className="h-[100vh] object-cover" alt="" />
      </div>
      <LoginForm />
    </div>
  )
}

export default SignIn