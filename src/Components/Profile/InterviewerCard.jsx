import React, {useState} from 'react'

import { Container, Row, Col, ListGroupItem } from 'reactstrap';

import './profile.css'

export default function InterviewerCard({interviewer, selectProfile}){
    return (
        <div className="interviewer-card" onClick={()=>{selectProfile(interviewer)}}>
        
            <ListGroupItem>
            <Container>
            <Row>
                <Col xs="3">
                    <img className="avatar" src={interviewer.image} alt="Profile Image"/>
                </Col>
                <Col>
                <Row>
                    <div className="name">
                        {`${interviewer.firstName} ${interviewer.lastName}`}
                    </div>
                </Row>
                <Row>
                <div className="role">
                        {interviewer.jobTitle}
                    </div>
                </Row>
                </Col>
            </Row>

            </Container>

            </ListGroupItem>

        </div>
    )
}