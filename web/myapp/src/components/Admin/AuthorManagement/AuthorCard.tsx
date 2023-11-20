import { Button } from "flowbite-react"

type TProps = {
  name: string
  dateOfBirth: string
  avatarUrl: string
  onEdit?: () => void
  onRemove?: () => void
}

const AuthorCard = ({ name, dateOfBirth, avatarUrl, onEdit, onRemove }: TProps) => {
  return (
    <div className="w-[250px] max-[500px]:w-[400px] h-fix bg-gray-800 p-3">
      <div className=" w-full">
        <img className="object-cover" src={avatarUrl ? avatarUrl : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div>
            <p className="text-lg">{name}</p>
          </div>
          <div>
            <p>{dateOfBirth}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={onEdit}>Edit</Button>
          <Button onClick={onRemove} className="bg-red-600">Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard