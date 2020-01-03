import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";

import "./profile.css";
// Components
import InterviewList from "../Profile/InterviewList";
import ProfilePreview from "../Profile/ProfilePreview";
import Sidebar from "../Header/sideBar"

const Profile = () => {
  const [interviewers, setInterviewers] = useState([
    {
      bio: "This is a Bio",
      skills: [{ name: "Bark" }, { name: "Sit" }, { name: "Lay" }],
      jobTitle: "Designer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Peter",
      lastName: "McFake"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Brian",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
    {
      bio: "This is a Bio",
      skills: [{ name: "Jump" }, { name: "Fly" }, { name: "Exterminate" }],
      jobTitle: "Dog Trainer",
      city: "New York",
      state: "New York",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg",
      workHistory: [
        {
          companyName: "",
          jobTitle: "",
          duties: "",
          supervisor: "",
          phone: "",
          canContact: true,
          from: Date,
          to: Date
        }
      ],
      interviewer: { default: false },
      references: [
        {
          name: "Peter",
          phone: "888-888-8888"
        }
      ],
      firstName: "Bob",
      lastName: "Taveras"
    },
  ]);

  const [selection, setSelection] = useState({ skills: [] });
  const [filteredData, updateData] = useState([])
  const search = data => {
      updateData(data)
      
  };

  useEffect(()=>{
    updateData(interviewers)
    setInterviewers(interviewers)
  }, [])

  function selectProfile(e) {
    setSelection(e);
  }

  return (
    <div className='profile'>
      <Row>
      <Col>
          <InterviewList
            interviewers={interviewers}
            selectProfile={selectProfile}
            selected={selection}
            filteredData={filteredData}
            search={search}
          />
        </Col>
          <Col>
          <ProfilePreview selected={selection} />
        </Col>
        <Sidebar />
        </Row>
        
        
  
    </div>
  );
};

export default Profile;
