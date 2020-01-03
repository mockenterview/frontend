import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './GroupCard.css';

const GroupCards = () => {
    return (
        <div className='Igroups'>
            <div className='cardGroup'>
            <Card body>
                <CardTitle>Skill Group</CardTitle>
                <CardText>Practice interviews for: </CardText>
                <Button color='primary'>Schedule</Button>
            </Card> 
            </div>
        </div>
    )
}

export default GroupCards