import { useSelector } from "react-redux"
import { FaBriefcase } from "react-icons/fa";
import { userSelector } from "../../../store/user/selector"
import { BiSolidMap } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";

const UserProfile = () => {    
    const user = useSelector(userSelector)
    return (
        <div className="min-h-[93vh] bg-gray-900">
            <div className="flex flex-col md:flex-row gap-4 justify-between px-[20px] md:px-[150px] pt-[100px] pb-[30px] bg-gray-700">
                <div className="flex items-center gap-6">
                    <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-[60px] md:rounded-[75px] bg-white overflow-hidden border-orange-500 border-[5px]">
                        <img className="" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/355014447_1441158876642031_1751018027059648646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0pMNyy01KIHMgQINh_UJPQna6maBHliFCdrqZoEeWIcSDfvRCnGt--UJ2qsH0vsoEwoXPUaWpY7jEtJRxu1iO&_nc_ohc=pp532t0XdNcAX_aI36B&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCFT5bb0uQpx7PXC2abH2YLmaJidLNOpq6HVB6kJD3qlw&oe=655EC084" alt="" />
                    </div>
                    <div className="font-bold text-3xl">
                        <p>{user?.firstName} {user?.lastName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="font-medium p-3 rounded-md bg-orange-500 cursor-pointer hover:bg-orange-400">Edit profile</div>
                    <div className="font-medium p-3 rounded-md bg-orange-500 cursor-pointer hover:bg-orange-400">Favorite comic</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-[50px]">
                <div className="bg-gray-600 w-[390px] h-[300px] rounded-lg">
                    <div className="absolute p-4">
                        <p className="font-bold text-[20px]">Bio</p>
                    </div>
                    <div className="flex justify-center items-center h-full rounded-lg">
                        <p>{user?.bio}</p>
                    </div>
                </div>
                <div className="bg-gray-600 w-[390px] md:w-[700px] h-[300px] rounded-lg p-5 flex flex-col gap-3">
                    <div className="flex gap-5 items-center">
                        <div className="scale-150">
                            <BiSolidMap />
                        </div>
                        <p className="text-left text-[20px]">{user?.country}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="scale-150">
                            <IoCalendarNumber />
                        </div>
                        <p className="text-left text-[20px]">{user?.age} years old</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="scale-150">
                            <FaBriefcase />
                        </div>
                        <p className="text-left text-[20px]">{user?.job}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="scale-150">
                            <FaPhoneAlt />
                        </div>
                        <p className="text-left text-[20px]">{user?.phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile