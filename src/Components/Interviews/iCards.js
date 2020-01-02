import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const iCards = () => {
    return (
        <div>
            <Card body className="text-right">
            <CardTitle>Skill Category</CardTitle>
            <CardText>Type of Skill Interview</CardText>
            <Button>Schedule</Button>
            </Card>   
        </div>
    )
}

export default iCards