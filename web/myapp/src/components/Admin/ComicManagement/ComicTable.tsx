import { Button, Table } from 'flowbite-react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ComicTable = () => {

  const navigate = useNavigate()
  const handleNavigateToDetailPage = (id: string) => {
    navigate(`detail/${id}`)
  }

  return (
    <Table className='bg-gray-700 text-white'>
      <tr className='border-b-[1px] border-white'>
        <th className='p-3'>Id</th>
        <th className='p-3'>Title</th>
        <th className='p-3'>Description</th>
        <th className='p-3'>imageUrl</th>
        <th className='p-3'>Author</th>
        <th className='p-3'>Category</th>
        <th className='p-3'>Latest update</th>
      </tr>
      <tr className='hover:bg-gray-800'>
        <td className='p-3'>XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX</td>
        <td className='p-3'>naruto</td>
        <td className='p-3 w-[30%]'>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</td>
        <td className='p-3 w-[150px]'>
          <img src="https://images.booksense.com/images/427/528/9781421528427.jpg" alt="" />
        </td>
        <td className='p-3'>
          Masashi kishimoto
        </td>
        <td className='p-3'>
          Hanh dong
        </td>
        <td className='p-3'>
          10/12/2022
        </td>
        <td><Button onClick={handleNavigateToDetailPage.bind(this, "1")}><FaArrowRight /></Button></td>
        <td></td>
      </tr>
    </Table>
  )
}

export default ComicTable