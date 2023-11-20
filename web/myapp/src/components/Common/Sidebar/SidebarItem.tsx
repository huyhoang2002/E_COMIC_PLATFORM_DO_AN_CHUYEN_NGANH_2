type TProps = {
  itemName: string
  onClick?: () => void
}

const SidebarItem = ({ itemName, onClick }: TProps) => {
  return (
    <div className="p-4 cursor-pointer hover:bg-slate-700" onClick={onClick}>
      <p className="font-bold">{itemName}</p>
    </div>
  )
}

export default SidebarItem