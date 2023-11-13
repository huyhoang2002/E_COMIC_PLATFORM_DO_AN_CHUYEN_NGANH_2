import { FaFacebook, FaInstagram } from "react-icons/fa"
import Container from "../Container/Container"
import Logo from "../Navbar/Logo/Logo"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-orange-600">
        <Container>
            <div className="flex flex-col gap-10">
                <div>
                    <Logo fontSize="lg"/>
                    <div className="w-[250px] h-[5px] bg-white"></div>
                </div>
                <div>
                    <div className="text-white text-lg font-medium">Contact us: </div>
                    <div className="flex text-white gap-[10px] mt-3">
                        <FaFacebook style={{ height: "30px", width: "30px" }} />
                        <FaXTwitter style={{ height: "30px", width: "30px" }} />
                        <FaInstagram style={{ height: "30px", width: "30px" }} />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer