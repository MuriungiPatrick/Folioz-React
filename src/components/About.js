import React from 'react'

const About = () => {
  return (
    <section className="team-section">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 col-md-12">
          <div className="topic-intro">
            <h6>Expert Team</h6>
          </div>
           <h3 className="display-3 fw-bold text-capitalize">Meet Our Team</h3>
           <div className="heading-line mx-auto"></div>
           <p className="text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit.
  
           </p> 
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='img/about/team-1.jpg' 
            alt='our team' 
            className="img-fluid" />
            <div className="team__overlay">
              <h5>Meru Mwangaza</h5>
              <div className="team__body">
               <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='img/about/team-2.jpg' 
            alt='our team' 
            className="img-fluid" />
            <div className="team__overlay">
              <h5>Ole mashamba</h5>
              <div className="team__body">
               <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='img/about/team-3.jpg' 
            alt='our team' 
            className="img-fluid" />
            <div className="team__overlay">
              <h5>Ndugu Zanguni</h5>
              <div className="team__body">
               <p>Brand Strategist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="team">
            <a href="#" aria-labelledby="person1"></a>
            <img src='img/about/team-4.jpg' 
            alt='our team' 
            className="img-fluid" />
            <div className="team__overlay">
              <h5>Quickmart Ivanka</h5>
              <div className="team__body">
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