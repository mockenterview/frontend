import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col } from 'reactstrap';
import Calendar from '../calendar/Calendar'



export default function ProfilePreview({ selected }) {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
   
    <div className={`${selected.firstName ? "profile-preview" : 'profile-preview-inactive'}`}>
      <div className="avatar"></div>
      <div className="name">{selected.firstName}</div>
      <div className="role">{selected.jobTitle}</div>
      <div className="skills">
       {selected.skills.map(el=>{
           return (
               <div className="skill" key={el.name}>{el.name}</div>
           )
       })}
      </div>
      
    
      <div className="bio">{selected.bio}</div>
      <div className="availability" onClick={() => setModal(true)}>CAL ICON
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Availability</ModalHeader>
            <ModalBody>
              <Calendar />
            </ModalBody>
            <ModalFooter>
              <Button color='primary'>Schedule</Button>
            </ModalFooter>
          </Modal>
      </div>
      <div className="profile-button">Feedback</div>
      </div>
    
  );
}
