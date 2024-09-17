import { useState } from "react"

const UseDisclosure = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle
  }
}

export default UseDisclosure