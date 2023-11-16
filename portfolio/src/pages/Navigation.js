import {Link, Outlet} from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Navigation = () => {
return (
<>
    <nav className='navbar'>
        <div className='nav-container'>

            <ul className='rotate'>
                <li><Link to='/contact' className='Alink'>Contact</Link></li>
                <li><Link to='/projects' className='Alink'>projects</Link></li>
                <li><Link to='/home' className='Alink'>home</Link></li>
            </ul>

            <ul className='icons'>
                <a className='icon' target="_blank" href="https://www.linkedin.com/in/el-jareauflierstudent/" rel="noreferrer">
                    <FaLinkedinIn />
                </a>

                <a  className='icon' target="_blank" href="mailto:el.j.flier@gmail.com" rel="noreferrer">
                    <IoIosMail />
                </a>
            </ul>
        </div>
    </nav>

    <Outlet />
</>
);
}


export default Navigation;