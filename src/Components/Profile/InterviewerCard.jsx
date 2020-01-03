import React, {useState} from 'react'

import { Container, Row, Col, ListGroupItem } from 'reactstrap';

import './profile.css'

export default function InterviewerCard({interviewer, selectProfile, selected}){
    return (
        <div className={`interviewer-card ${selected.firstName == interviewer.firstName ? 'card-active' : ''}`} onClick={()=>{selectProfile(interviewer)}}>
            <ListGroupItem>
            <Container>
            <Row>
                <Col xs="3" >
                    <img className="avatar" src={interviewer.image} alt="Profile Image"/>
                </Col>
                <Col xs="7" >
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