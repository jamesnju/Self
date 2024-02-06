import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdAddCall } from "react-icons/md";





const Footer = () => {
  const currentYear= new Date().getFullYear();
  return (
    <div className='container-fluid foot'>
      <div className="moving-text-container">
        <h4 className="moving-text">Click reach me!!!</h4>
      </div>
      <div className="footer d-flex">
        <p><a href="https://github.com/jamesnju"> <FaGithubSquare /></a></p>
        <p><FaInstagramSquare /></p>
        <p><a href="https://www.linkedin.com/in/james-muniu-33a92a234/"><CiLinkedin /></a></p>
        <p><a href="mailto:james500nju@gmail.com"><AiOutlineMail /></a></p>
        <p><a href="tel: +254700747076"><MdAddCall /></a></p>
      </div>
      <h4 className="text-center text-success">&copy; All Rights Reserved {currentYear}
      </h4>
    </div>
  )
}

export default Footer