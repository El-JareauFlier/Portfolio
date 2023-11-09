import {Link, Outlet} from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

const Navigation = () => {
return (
<>
    <nav className='navbar'>
        <div className='nav-container'>
            <ul><Hamburger/></ul>

            <ul className='rotate'>
                <li><Link to='/contact' className='Alink'>Contact</Link></li>
                <li><Link to='/projects' className='Alink'>projects</Link></li>
                <li><Link to='/home' className='Alink'>home</Link></li>
            </ul>

            <ul>
                <div className='icon'>
                    <img src="" alt="" />
                </div>

                <div className='icon'>
                    <img src="" alt="" />
                </div>
            </ul>
        </div>
    </nav>

    <Outlet />
</>
);
}


export default Navigation;