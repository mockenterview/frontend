import React from 'react'
import Welcome from "./Welcome"
import How from "./HowWorks"
import Mission from "./Mission"
import Team from "./Team"
import Footer from "./Footer"
import './About.css'

const About = () => {
    return (
     <div>
         <Welcome />
         <How />
         <Mission />
         <Team />
         <Footer />
     </div>
    )
}

export default About