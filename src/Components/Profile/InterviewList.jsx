import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import InterviewerCard from "./InterviewerCard";

const InterviewList = ({interviewers}) => {


  return (
    <div className="interview-list">
      <ListGroup>
        {interviewers.map(el => {
          return <InterviewerCard interviewer={el} key={el.name} />;
        })}
      </ListGroup>
    </div>
  );
};

export default InterviewList;
