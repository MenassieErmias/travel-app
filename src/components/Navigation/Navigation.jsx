import './navigation.css';

import { AiOutlineCloseCircle } from 'react-icons/ai'

const Navigation = ({ displayNav, setDisplayNav }) => {
    return (
        <div className={displayNav ? 'nav' : 'nav closed'}>
            <nav className='navContainer'>
                <ul className="navList">
                    <li className="navItem" onClick={() => setDisplayNav(false)}>
                        <a href="#home" className="navLink">
                            Home
                        </a>
                    </li>
                    <li className="navItem" onClick={() => setDisplayNav(false)}>
                        <a href="#destinations" className="navLink">
                            Destinations
                        </a>
                    </li>
                    <li className="navItem" onClick={() => setDisplayNav(false)}>
                        <a href="#Team" className="navLink">
                            Team
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="closeNavDiv" >
                <AiOutlineCloseCircle className='closeNavIcon' onClick={() => setDisplayNav(false)} />
            </div>
        </div>
    )
}

export default Navigation