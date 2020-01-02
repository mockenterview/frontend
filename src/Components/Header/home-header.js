import React from 'react'
import { Link } from "react-router-dom"

const header = () => {
    return (
        <div className='header'>
            <span className='logo'>
                MockEnterView
            </span>
            <nav>
                <span className='link'>
                    <a>Home</a>
                {/* need links to deployed pages */}
                    <a>About</a>
                {/* Need links to about page */}
                    <a>For Employees</a>
                </span>
                <span className='auth'>
                    <Link to='/login'>Login</Link>
                    <Link to='/'>Sign Up</Link>
                </span>
            </nav>
        </div>
    )
}
export default header