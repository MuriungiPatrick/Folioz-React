import { useEffect, useState } from "react";

const Home = () => {
 
  return (
    
<section id="home" className="intro-section">
  <div className="container">
    <div className="row align-items-center text-white">
       
      <div className="col-md-6 intros text-start">
        <div className="topic-intro">
            <h6>we are a creative digital agency</h6>
        </div>
          <h1 className="display-2 fw-bold mb-3">Hey!, I'm Folioz</h1>
            <h6 className="lh-lg">
              A HTML Template supremely crafted for web agencies, freelancer, creative agency, photography, digital media design company who want to showcase their portfolio in a stylish minimal way.
            </h6>
          <button type="button" className="mt-4 btn btn-outline-light">          
            Discover More <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      
        <div className="col-md-6 col-lg-6 intros order-1 text-end">
          <div className="intro-box">      
            <img 
            className="img-fluid" 
            src="img/hero/Design-illustration.png" 
            alt="Vaxa code youtube channel" 
            />              
            </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Home;
