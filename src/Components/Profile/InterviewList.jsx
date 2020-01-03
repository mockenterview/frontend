import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import InterviewerCard from "./InterviewerCard";

const InterviewList = ({interviewers, selectProfile, selected}) => {


  return (
    <div className="interview-list">
      <ListGroup>
        {interviewers.map(el => {
          return <InterviewerCard interviewer={el} key={el.firstName} selectProfile={selectProfile} selected={selected} />;
        })}
      </ListGroup>
    </div>
  );
};

export default InterviewList;
