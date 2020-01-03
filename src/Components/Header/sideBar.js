import React from 'react'
import './sideBar.css';


const sideBar = () => {
    return (
        <div className='sidebar'>
            <div className='avatar'>
                <div className='round'></div>
                <p>User Name</p>
                <p>User@email.com</p>
            </div>
            <div className='interviews'>
                <p>Schedule New</p>
                <p>Interview </p>
            </div>
            <div className='tools'>
                <p>Calendar</p>
                <p>Contacts</p>
                <p>Reminders</p>
                <p>Feedback</p>
            </div>
        </div>
    )
}

export default sideBar