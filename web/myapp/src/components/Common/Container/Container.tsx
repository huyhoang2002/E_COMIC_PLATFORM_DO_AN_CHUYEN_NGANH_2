import React from 'react'

type Props = {
    mt?: string,
    children: React.ReactNode
}

const Container = ({mt, children }: Props) => {
  return (
    <div className={`px-[100px] max-[500px]:px-[50px] ${mt}`}>
        {children}
    </div>
  )
}

export default Container