import React from 'react'
import { Link } from "react-router-dom"
import './home-header.css';
const header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                MockEnterView
            </div>
            <nav>
                <div className='link'>
                    <a>Home</a>
                {/* need links to deployed pages */}
                    <a>About</a>
                {/* Need links to about page */}
                    <a>For Employees</a>
                    <a>FAQ</a>
                </div>
                <div className='auth'>
                    <Link to='/login'>Login</Link>
                    <Link to='/'>Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}
export default header