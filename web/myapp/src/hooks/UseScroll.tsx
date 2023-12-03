import { useEffect, useState } from 'react'

const useScroll = ({ x, y }: { x: number, y: number}) => {
    const [ X, setX ] = useState<number>()
    const [ Y, setY ] = useState<number>()

    useEffect(() => {
        setX(x)
        setY(y)
        window.scrollTo(X as number, Y as number)
    }, []);
}

export { useScroll }