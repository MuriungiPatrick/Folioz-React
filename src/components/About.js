import React from 'react'

function About() {
  return (
    <section class="team-section">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12 col-md-12">
          <div class="topic-intro">
            <h6>Expert Team</h6>
          </div>
           <h3 class="display-3 fw-bold text-capitalize">Meet Our Team</h3>
           <div class="heading-line mx-auto"></div>
           <p class="text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit.
  
           </p> 
        </div>
      </div>
      <div class="row text-center mt-5">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='public/images/team/team-1.jpg' alt='our team' class="img-fluid">
            <div class="team__overlay">
              <h5>Meru Mwangaza</h5>
              <div class="team__body">
               <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='public/images/team/team-2.jpg' alt='our team' class="img-fluid">
            <div class="team__overlay">
              <h5>Ole mashamba</h5>
              <div class="team__body">
               <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='public/images/team/team-3.jpg' alt='our team' class="img-fluid">
            <div class="team__overlay">
              <h5>Ndugu Zanguni</h5>
              <div class="team__body">
               <p>Brand Strategist</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='public/images/team/team-4.jpg' alt='our team' class="img-fluid">
            <div class="team__overlay">
              <h5>Quickmart Ivanka</h5>
              <div class="team__body">
               <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About