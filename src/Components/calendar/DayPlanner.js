import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const DayPlanner = props => {
  const { buttonLabel, className } = props;

  return (
    <div>
      <Modal isOpen={props.modals} toggle={props.toggler} className={className}>
        <ModalHeader toggle={props.toggler}>{props.date}</ModalHeader>
        <ModalBody>
        
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder={props.date}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggler}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={props.toggler}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DayPlanner;
