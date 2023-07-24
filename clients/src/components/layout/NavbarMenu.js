import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Dropdown from 'react-bootstrap/Dropdown'
import logoutIcon from '../../assets/logout.svg'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import logoFo4 from '../../assets/logo.png'
import Button from 'react-bootstrap/Button' 
import { Link } from 'react-router-dom'
import { useContext,  useEffect, useState} from 'react'
import axios from 'axios';
import {
	apiUrl,
	LOADED_FAIL,
	LOADED_SUCCESS,
	ADD,
	DELETE,
	UPDATE,
	FIND
} from '../../contexts/constants'//Note

const NavbarMenu = () => {

	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const Hamburger = () => (
		<svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
			<g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
				<rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c" />
				<rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c" />
				<rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c" />
			</g>
		</svg>
	);

	const Logo = () => (
		<img src={logoFo4} />
	);

	return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Logo /> 
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/xep-hang">Xếp hạng</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarMenu
