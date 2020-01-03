import React, {useState} from 'react'
import { Button, Nav, NavItem, NavLink,Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import './home-header.css';


const Header = props => {

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
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color='link' caret >
                    About
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="#works">How It Works</DropdownItem>
                    <DropdownItem href="#team">Our Team</DropdownItem>
                    <DropdownItem href="#contact">Contact</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                 <NavLink href="#mission">Mission</NavLink>
            </NavItem>
            <NavItem>
                 <NavLink disabled href="#">Employees</NavLink>
            </NavItem>
            <NavItem>
                 <NavLink disabled href="#">FAQ</NavLink>
            </NavItem> 
            </div>   
                <div className='auth'>
                    <Button color="primary" onClick={() => props.history.push("/login")}>Login</Button>
                    <Button color="primary" onClick={() => props.history.push("/register")}>Sign Up</Button>
                </div>
            </Nav>
            </div>
        </div>
    )
}
export default Header
