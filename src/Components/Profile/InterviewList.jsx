import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import InterviewerCard from "./InterviewerCard";
import SeachForm from './SearchForm'
import SearchForm from "./SearchForm";

const InterviewList = ({interviewers, selectProfile, selected, filteredData, search}) => {

 

  return (
    <div className="interview-list">
        <SearchForm search={search} data={interviewers} />
      <ListGroup>

        {filteredData.map(el => {
          return <InterviewerCard interviewer={el} key={el.firstName} selectProfile={selectProfile} selected={selected} />;
        })}
      </ListGroup>
    </div>
  );
};

export default InterviewList;
