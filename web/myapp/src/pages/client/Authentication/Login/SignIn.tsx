const SignIn = () => {
  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
        <form className="p-6 bg-gray-800 w-[700px] h-[600px] flex flex-col gap-[40px]">
            <div className="w-full">
                <input className="w-full text-black" type="text" name="" id="" placeholder="Gmail..."/>
            </div>
            <div className="">
                <input className="w-full text-black" type="password" name="" id="" placeholder="Password..."/>
            </div>
        </form>
    </div>
  )
}

export default SignIn