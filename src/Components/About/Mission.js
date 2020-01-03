import React from 'react'

const Mission = () => {
    const [memberCount, setMembercount] = React.useState(100000)
    const [intHours, setIntHours] = React.useState(400000)
    const [jobsCount, setJobsCount] = React.useState(80000)

    return (
        <div>
        <div className='mission' id='mission'>
            <div className='blurb'>
                <h2>Practice. Guide. Discover.</h2>
            </div>
            <div className='ment'>Hot chicken keffiyeh pop-up polaroid blue bottle tbh franzen chambray, raw denim cornhole 8-bit migas direct trade tousled ennui. Portland blue bottle affogato tattooed normcore bespoke before they sold out sustainable chillwave marfa gentrify letterpress succulents man braid. Authentic pinterest church-key sustainable tofu biodiesel kickstarter. Gentrify taxidermy try-hard affogato ethical neutra.</div>
            <div className='counts'>
                <div className='cardCount'>
                    <div className='number'>{memberCount}</div>
                    <div className='cardCountText'>Members joined since 2019</div>
                </div>
                <div className='cardCount'>
                    <div className='number'>{intHours}</div>
                    <div className='cardCountText'>Hours of Interviews</div>
                </div>
                <div className='cardCount'>
                    <div className='number'>{jobsCount}</div>
                    <div className='cardCountText'>Job Offers Landed</div>
                </div>
            </div>
        </div>
        <div className='mission-startnow'>

            <img url="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
        </div>

        </div>
    )
}

export default Mission 