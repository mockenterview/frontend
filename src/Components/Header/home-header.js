import React, {useState} from 'react'
import { Button, Nav, NavItem, NavLink,Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import './home-header.css';


const Header = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    
    return (
        <div className='header'>
            <div className='logo'>
                MockEnterView
            </div>
            <div className='nav'>
            <Nav>
                <div className='link'>
             <NavItem>
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color='link' caret >
                    About
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="#">How It Works</DropdownItem>
                    <DropdownItem href="#">Our Team</DropdownItem>
                    <DropdownItem href="#">COntact</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                 <NavLink href="#">Employees</NavLink>
            </NavItem>
            <NavItem>
                 <NavLink href="#">Employers</NavLink>
            </NavItem>
            <NavItem>
                 <NavLink href="#">FAQ</NavLink>
            </NavItem> 
            </div>   
                <div className='auth'>
                    <Button color="primary">Login</Button>
                    <Button color="primary">Sign Up</Button>
                </div>
            </Nav>
            </div>
        </div>
    )
}
export default Header
