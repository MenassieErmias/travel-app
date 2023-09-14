import './header.css';

import logo from '../../assets/images/travel-1883060_640.png';

import { RxHamburgerMenu } from 'react-icons/rx';

const Header = ({ displayNav, setDisplayNav }) => {
    return (
        <header className='header' onMouseLeave={() => setDisplayNav(false)}>
            <div className="headerContainer">
                <div className="logoArea">
                    <img src={logo} alt="" className="logoImg" />
                    <div className="headerTitle">
                        <h1 className="titleH1">
                            Travel App
                        </h1>
                    </div>
                </div>
                <div className={displayNav ? "hamburgerIconDiv disappear" : "hamburgerIconDiv"} >
                    <RxHamburgerMenu className='hamburgerIcon' onMouseEnter={() => setDisplayNav(true)} />
                </div>
            </div>
        </header>
    )
}

export default Header;