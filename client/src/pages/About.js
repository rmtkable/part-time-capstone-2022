import React from 'react'
import Footer from '../components/Footer';
import '../styles/About.css'
import '../styles/index.css'

const About = () => {
  return (
    <div className='background'>
    <div className="goal">
       <h3 class="">Our Goal </h3>
        <p class="lead"> The Goal we have is a simple one, to give you the visitor of this site. A good look into the city of Cincinnati and it's surrounding areas, to make your stay with us as amazing as it can be! </p>
        </div>
    <div className="aboutcontainer">
    
      <h2 class="coders">The Men Behind the Site: </h2> <h2><span class='coders'>Two eager guys looking to <br></br>make a name for themselves.</span></h2>
      <div class="row">
        <div class="col-lg-4">
          {/* <img src={Devon} alt="Self" width="220" height="220"></img> */}
          <h2 class="name">Devon Keim</h2>
          <p class='description'>Front End Extroadinare </p>
          <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/devon-keim-8898aa88/" role="button">View my profile</a></p>
        </div>
        <div class="col-lg-4">
          {/* <img src={CHeadshot} alt="Generic placeholder " width="220" height="220"></img> */}
          <h2 class="name">Carl Wilkinson</h2>
          <p class='description'> Back End Extroadinare </p>
          <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/carl-wilkinson-b83571180/" role="button">View my profile</a></p>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default About