import { Button } from "flowbite-react"

const UploadComicEpisode = () => {
  return (
    <div className='w-full h-fit bg-gray-700 grid p-3'>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
          <label htmlFor="">Volume</label>
          <input className="text-black" placeholder="volume..." type="text" name="" id="" />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="">Volume images</label>
          <input type="file" multiple />
        </div>
        <div>
          <Button>Upload volume</Button>
        </div>
      </form>
    </div>
  )
}

export default UploadComicEpisode