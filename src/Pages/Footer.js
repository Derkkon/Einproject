import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return(
        <div className="bg-yellow-400 p-5">
            <div className="grid grid-cols-2 gap-6 container mx-auto px-20">
                <div>
                    <h3>Designed by <a href="#" className="text-red-600 font-bold">Siebe</a></h3>
                </div>
                <div className="flex justify-end text-3xl">
                    <a href='https://www.facebook.com/' target={"_blank"} rel={"noreferrer"} className="hover:text-red-600 mr-2">
                        <FaFacebookSquare/>
                    </a>
                    <a href='https://www.instagram.com/' target={"_blank"} rel={"noreferrer"}  className="hover:text-red-600">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;