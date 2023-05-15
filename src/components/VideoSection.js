import React from 'react'


const VideoSection = () => {

  return (

<section className="section-with-video">
  <div className="container">
    <div className="row text-white text-center mb-3">     
      <div className="col-lg-12">
       <div className="content">
        <h3 className="fw-bold">Watch our intro video</h3>
        <div className="heading-line mx-auto"></div>
        <p className="p-3 d-sm-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
        </p>
        </div>
        </div>
      </div>
    </div>
</section>



<main className="section-ntop">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12 mt-5">
        <div className="video-box bg-primary shadow">     
          <img className="img-fluid" 
            src="img/intro/1.png" 
            alt="Vaxa code youtube channel" />
              <a className="glightbox position-absolute top-50 start-50 translate-middle" 
              href="#">   
                <span className="video-button">
                                    
                </span> 
                 <span className="border-animation border-1"></span>                      
                 <span className="border-animation border-2"></span> 
         ;       </a> 
          ;</div>
        </div>
    </div>
  </div>
</main>
  );
};

export default VideoSection;