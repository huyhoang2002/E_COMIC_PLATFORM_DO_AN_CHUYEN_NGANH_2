type props = {
    title: string
}

const Button = ({ title }: props) => {
  return (
    <div className='bg-orange-600 px-5 py-3 w-fit rounded-lg text-white cursor-pointer hover:bg-orange-500 transition-all'>
        {title}
    </div>
  )
}

export default Button