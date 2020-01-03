import React from 'react'
import Andrew from '../../images/TEAM/andrew.jpg'
import Brian from '../../images/TEAM/brian.PNG'
import Cori from '../../images/TEAM/Cori.PNG'
import Danny from '../../images/TEAM/danny.PNG'
import Derek from '../../images/TEAM/Derek.PNG'
import Vicki from '../../images/TEAM/Vicki.PNG'

const Team = () => {
    return (
        <>
        <div className='title' id='team'>
            <h2>Meet The Team</h2> 
         </div>
        <div className='Team'>
            <div className='Person'>
            <div className='ig'>
                <img src={Andrew} alt='Andrew Ogle' className='shape'/>
            </div>
                <p>Andrew Ogle</p>
                <p>Project Lead</p>
            </div>
            <div className='Person'>
            <div className='ig'>
            <img src={Brian} alt='Brian Taveras' className='shape'/>
            </div>
                <p>Brian Taveras</p>
                <p>Developer</p>
            </div>
            <div className='Person'>
                <div className='ig'>
                <img src={Cori} alt='Cori Sternberg' className='shape'/>
                </div>
                <p>Cori Sternberg</p>
                <p>Developer</p>
            </div>
            <div className='Person'>
            <div className='ig'>
            <img src={Danny} alt='Danniel Vidal' className='shape'/>
            </div>
                <p>Danniel Vidal</p>
                <p>Developer</p>
            </div>
            <div className='Person'>
            <div className='ig'>
            <img src={Derek} alt='Derek Etman' className='shape'/>
            </div>
                <p>Derek Etman</p>
                <p>Developer</p>
            </div>
            <div className='Person'>
            <div className='ig'>
            <img src={Vicki} alt='Vicki Nelson' className='shape'/>
            </div>
                <p>Vicki Nelson</p>
                <p>UX Designer</p>
            </div>
        </div>
        </>
    )
}
export default Team