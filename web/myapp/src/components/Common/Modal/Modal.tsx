import { Button } from 'flowbite-react'
import { IoIosClose } from "react-icons/io";

type Props = {
    isOpen?: boolean,
    onClose?: () => void
}

const Modal = ({ isOpen, onClose }: Props) => {
    return (
        <>
        <div className={`transition-all ${!isOpen && "hidden"} absolute z-[100000] bg-gray-800 opacity-90 w-full h-[100vh]`}>
        </div>
        <div className='flex absolute z-[100001] justify-center w-full h-[100vh] items-center'>
            <div className="h-fit w-[600px] bg-white opacity-100">
                <div className="p-4 border-b-[1px] border-gray-200 w-full flex justify-between">
                    <p className="text-black text-[20px] font-bold">Alert...</p>
                    <div className='text-black hover:scale-110' onClick={onClose}>
                        <IoIosClose />
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-black text-[17px]">this is an alet text</p>
                </div>
                <div className="p-4 flex justify-end border-t-[1px] border-gray-200">
                    <Button>Ok</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal