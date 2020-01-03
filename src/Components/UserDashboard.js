import React from 'react';
import { Container, Row, Button, Alert, Label, FormGroup, Col, Toast, ToastBody, ToastHeader, Card } from "reactstrap";

import Calendar from './calendar/Calendar'
import Groups from "./Interviews/GroupCards"
import SideBar from "./Header/sideBar"


function UserDashboard() {

    return (
    <>
        <Container className="wrapper">
            <Row>
                    <Calendar />

                    <SideBar />
            </Row>
        </Container>
    </>
    );
}

export default UserDashboard;