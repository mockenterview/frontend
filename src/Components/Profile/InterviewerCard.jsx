import React, {useState} from 'react'

import { Container, Row, Col, ListGroupItem } from 'reactstrap';

import './profile.css'

export default function InterviewerCard(props){
    console.log(props.name)
    return (
        <div className="interviewer-card">
        
            <ListGroupItem>
            <Container>
            <Row>
                <Col xs="3">
                    <img className="avatar" src={props.interviewer.image} alt="Profile Image"/>
                </Col>
                <Col>
                <Row>
                    <div className="name">
                        {`${props.interviewer.firstName} ${props.interviewer.lastName}`}
                    </div>
                </Row>
                <Row>
                <div className="role">
                        {props.interviewer.jobTitle}
                    </div>
                </Row>
                </Col>
            </Row>

            </Container>

            </ListGroupItem>
        </div>
    )
}