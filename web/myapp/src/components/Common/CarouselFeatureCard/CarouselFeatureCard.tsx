import Button from "../Button/Button"

type props = {
    wallpaper: string,
    title: string,
    content: string
}

const CarouselFeatureCard = ({ wallpaper, title, content }: props) => {
  return (
    <div>
        <img className='relative h-[900px] max-md:h-[400px]' src={wallpaper} />
        <div className='absolute bottom-[100px] max-md:bottom-0 max-md:left-0 max-w-[500px] left-[200px] p-5 bg-white opacity-90'>
            <div className='mt-[150px] flex flex-col gap-10 text-black'>
                <div>
                    <h1 className='font-extrabold text-[90px] max-md:text-[70px]'>{title}</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-left font-thin max-[500px]:text-[15px]'>{content}</p>
                    <Button>Read this comic now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarouselFeatureCard