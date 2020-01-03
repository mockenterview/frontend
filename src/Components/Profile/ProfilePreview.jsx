import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col } from 'reactstrap';
import Calendar from '../calendar/Calendar'



export default function ProfilePreview({ selected }) {
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

      <div className="availability">
      <div>
      <Button color="primary" onClick={toggle}><i class="fa fa-calendar"></i> Calendar</Button>
      <Modal isOpen={modal} toggle={toggle} className='avail'>
        <ModalHeader toggle={toggle}>Choose a Time</ModalHeader>
        <ModalBody>
         <Calendar />
        </ModalBody>
      </Modal>
    </div>
      </div>
      <div className="fb">
        {/* change onclick toggle to a secondary toggle */}
      <Button color="primary"><i class="fa fa-pie-chart"></i> Feedback</Button>
      {/* <Modal isOpen={modal} toggle={toggle} className='feedback'>
        <ModalHeader toggle={toggle}>Feedback</ModalHeader>
        <ModalBody>
         FORM
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      </div>
    
  );
}
