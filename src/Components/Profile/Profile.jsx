import React, {useState} from 'react';

import './profile.css'
// Components
import InterviewList from '../Profile/InterviewList';
import ProfilePreview from '../Profile/ProfilePreview'

const Profile = () =>{

    const [interviewers, setInterviewers] = useState(
        [
            {
              bio: "This is a Bio",
              skills: [{ name: "Be cool" }],
              jobTitle: 'Designer',
              city: "New York",
              state: "New York",
              image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
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
              interviewer: {default: false},
              references: [{
                  name: 'Peter',
                  phone: '888-888-8888'
                }],
                firstName: 'Peter',
                lastName: 'McFake',        
            },
            {
              bio: "This is a Bio",
              skills: [{ name: "Be cool" }],
              jobTitle: 'Dog Trainer',
              city: "New York",
              state: "New York",
              image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
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
              interviewer: {default: false},
              references: [{
                  name: 'Peter',
                  phone: '888-888-8888'
                }],
                firstName: 'Brian',
                lastName: 'Taveras',        
            }
          ]
      );

    return (
        <div className="profile">
            <InterviewList interviewers={interviewers} />
            <ProfilePreview />
            
        </div>
    );

}

export default Profile;