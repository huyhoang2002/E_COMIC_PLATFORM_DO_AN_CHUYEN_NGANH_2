const ComicDetailSkeleton = () => {
  return <>
    <div className="flex h-[120vh] pt-[150px] flex-col gap-3 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white w-[370px] md:w-[700px] lg:w-[1100px] h-fit bg-opacity-95">
            <div className="p-5 flex flex-col gap-2">
                <div className="h-[500px] object-cover bg-gray-200 border-none animate-pulse 300ms" />
                <div className="w-full bg-gray-300 h-[50px] animate-pulse 300ms"></div>
            </div>
            <div className="flex flex-col gap-4 p-5 col-span-2">
                <div className="text-black text-[50px] font-semibold"></div>
                <div className="text-black flex flex-col gap-3">
                    <div className="bg-gray-200 w-[300px] h-[30px] animate-pulse 300ms"></div>
                    <div className="bg-gray-200 w-[600px] h-[30px] animate-pulse 300ms"></div>
                    <div className="bg-gray-200 w-[600px] h-[30px] animate-pulse 300ms"></div>
                    <div className="bg-gray-200 w-[600px] h-[30px] animate-pulse 300ms"></div>
                    <div className="bg-gray-200 w-[600px] h-[200px] animate-pulse 300ms"></div>
                </div>
                <div className=''></div>
          </div>
        </div>
        <div className="flex flex-col w-[370px] md:w-[700px] lg:w-[1100px] h-[100px] justify-between bg-white">
            <div className='text-black flex gap-6 m-5 cursor-pointer'>
                <div className='font-medium bg-gray-300 h-[50px] w-[100px] animate-pulse 300ms'></div>
                <div className='font-medium bg-gray-300 h-[50px] w-[100px] animate-pulse 300ms'></div>
            </div>       
            <div>
            </div>
            </div>
    </div>
  </>
}

export default ComicDetailSkeleton