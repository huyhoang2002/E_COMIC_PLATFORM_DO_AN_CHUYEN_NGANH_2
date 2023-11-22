import { Button, Modal } from "flowbite-react"

type TProps = {
  isOpen: boolean
  onClose: () => void
}

const AddNewCategoryForm = ({ isOpen, onClose }: TProps) => {

  return (
    <div>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>Add new category</Modal.Header>
        <Modal.Body>
          <form>
            <div className="text-black grid grid-cols-1 gap-4">
              <label htmlFor="" className="font-medium">Category name</label>
              <input className="border-orange-500" placeholder="category name..." type="text" name="" id="" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button>Submit</Button>
          <Button className="bg-red-500" onClick={onClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddNewCategoryForm