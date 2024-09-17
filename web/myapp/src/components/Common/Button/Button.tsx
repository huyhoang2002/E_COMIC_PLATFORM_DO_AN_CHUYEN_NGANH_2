type props = {
    children: React.ReactNode
}

const Button = ({ children }: props) => {

  return (
    <div className='bg-orange-600 px-5 py-3 w-fit rounded-lg text-white cursor-pointer hover:bg-orange-500 transition-all'>
        {children}
    </div>
  )
}

export default Button