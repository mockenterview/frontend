import React from 'react'

const Mission = () => {
    const [memberCount, setMembercount] = React.useState(100000)
    const [intHours, setIntHours] = React.useState(400000)
    const [jobsCount, setJobsCount] = React.useState(80000)

    return (
        <div className='mission' id='mission'>
            <div className='blurb'>
                <h2>Practice. Guide. Discover.</h2>
            </div>
            <div className='ment'>Hot chicken keffiyeh pop-up polaroid blue bottle tbh franzen chambray, raw denim cornhole 8-bit migas direct trade tousled ennui. Portland blue bottle affogato tattooed normcore bespoke before they sold out sustainable chillwave marfa gentrify letterpress succulents man braid. Authentic pinterest church-key sustainable tofu biodiesel kickstarter. Gentrify taxidermy try-hard affogato ethical neutra.</div>
            <div className='counts'>
                <div className='cardCount'>
                    <div className='number'>{memberCount}</div>
                    <div>Members joined since 2019</div>
                </div>
                <div className='cardCount'>
                    <div className='number'>{intHours}</div>
                    <div>Hours of Interviews</div>
                </div>
                <div className='cardCount'>
                    <div className='number'>{jobsCount}</div>
                    <div>Job Offers Landed</div>
                </div>
            </div>
        </div>
    )
}

export default Mission 