import React, { useState } from "react";
import { format, addHours } from "date-fns";
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
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DayPlanner = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { buttonLabel, className } = props;

  const hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];

  const appTime = num => format(addHours(props.time, num), "h bbbb ");
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

            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder={props.date}
            />
            <br />
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Dropdown</DropdownToggle>
              <DropdownMenu>
                {hours.map(item => {
                  let num = item;
                  return (
                    <DropdownItem
                      key={item}
                      onClick={() =>
                        console.log(
                          format(
                            addHours(props.time, item),
                            "MMMM d yyyy h bbbb "
                          )
                        )
                      }
                    >
                      {appTime(item)}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
            <br />
            <Button color="primary">Submit</Button>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggler}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DayPlanner;
