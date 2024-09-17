import { Spinner } from 'flowbite-react'

const Loading = () => {
  return (
    <div className="absolute z-[100000] flex justify-center items-center w-full h-[100vh] bg-gray-600 opacity-80">
        <Spinner className="text-orange-600 h-[50px] w-[50px]" />
    </div>
  )
}

export default Loading