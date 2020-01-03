import React from "react";

export default function ProfilePreview({ selected }) {
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
      <div className="availability">Availability goes here</div>
      <div className="profile-button">Full Profile</div>
    </div>
  );
}
