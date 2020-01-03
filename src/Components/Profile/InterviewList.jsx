import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import InterviewerCard from "./InterviewerCard";

const InterviewList = ({interviewers, selectProfile}) => {


  return (
    <div className="interview-list">
      <ListGroup>
        {interviewers.map(el => {
          return <InterviewerCard interviewer={el} key={el.firstName} selectProfile={selectProfile} />;
        })}
      </ListGroup>
    </div>
  );
};

export default InterviewList;
