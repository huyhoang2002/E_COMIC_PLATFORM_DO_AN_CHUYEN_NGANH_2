type TProps = {
  imageUrl: string
  title: string
  categoryName: string
  authorName: string
  latestEpisodeUpdate: number
  description: string
}

const ComicDetail = ({ imageUrl, title, categoryName, authorName, latestEpisodeUpdate, description }: TProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-700  w-[370px] md:w-[700px] lg:w-[1100px] h-fit bg-opacity-95">
      <div className="p-5 flex flex-col gap-2">
        <img className="h-[500px] object-cover" src={imageUrl} alt="" />
        {/* <Button className="rounded-none bg-orange-600 transition-all" onClick={handleReadFirstVolume}>Read volume 1 now</Button> */}
      </div>
      <div className="flex flex-col gap-4 p-5 col-span-2">
        <h1 className="text-white text-[50px] font-semibold">{title}</h1>
        <div className="flex flex-col gap-3">
          <p className="font-medium text-white">Genre: <span className="text-white">{categoryName}</span></p>
          <p className="font-medium text-white">Artist: <span className="text-white">{authorName}</span></p>
          <p className="font-medium text-white">Latest update: <span className="text-white">{latestEpisodeUpdate}</span></p>
        </div>
        <div className=''>
          <p className="text-white text-justify">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ComicDetail