import React from 'react'
import { Button, Nav, NavItem, NavLink  } from 'reactstrap';
import './home-header.css';

const header = () => {
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
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
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
export default header