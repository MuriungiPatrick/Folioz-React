import React from 'react'

function Testimonial() {

  return (
    <section className="testimonials">
  <div className="container">
    <div className="row text-center">
      <div className="topic-intro">
        <h6>Customers review</h6>
      </div>
       <h3 className="display-3 fw-bold text-capitalize">testimonials</h3>
       <div className="heading-line mx-auto"></div>
       <p className="text-capitalize">What our clients are saying</p>     
    </div>
  <div className="row justify-content-center text-white mt-5">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carousel" data-bs-slide-to="0" className="active bg-primary rounded-circle"></li>
        <li data-bs-target="#carousel" data-bs-slide-to="1" className="bg-primary rounded-circle"></li>
        
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                  <i className="bi bi-chat-quote" aria-hidden="true"></i>
                    <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                      </p>
                      <br />                          
                   <div className="d-flex justify-content-evenly">
                    <div className="client-img">
                      <img src="img/testimonials/client-1.jpg" 
                      className="rounded-circle img-fluid" />
                    </div>                                
                  <div className="name mt-2">
                  <h5>Jack Mathews</h5>
                  <p className="fw-light">Global Brand manager - <span>Artc Cafe</span></p>
                    </div>
                   </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                <i className="bi bi-chat-left-quote" aria-hidden="true"></i>
                  <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                    </p>
                    <br />                          
                    <div className="d-flex justify-content-evenly">
                      <div className="client-img">
                        <img src="img/testimonials/client-3.jpg" 
                        className="rounded-circle img-fluid" />
                      </div>                                
                    <div className="name mt-2">
                        <h5>Esther Zawadi</h5>
                        <p className="fw-light">digital strategist - <span>Bnb africa</span></p>
                    </div>
                    </div>
                </div>
              </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                  <i className="bi bi-chat-left-quote" aria-hidden="true"></i>
                    <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                      </p>
                      <br />                          
                    <div className="d-flex justify-content-evenly">
                      <div className="client-img">
                        <img src="img/testimonials/client-1.jpg" 
                        className="rounded-circle img-fluid" />
                  </div>                                
                    <div className="name mt-2">
                    <h5>Uhuru Kenyatta</h5>
                    <p className="fw-light">MD - <span>Brookside Diaries</span></p>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>                   
              </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                  <i className="bi bi-chat-left-quote" aria-hidden="true"></i>
                    <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                      </p>
                      <br />                          
                      <div className="d-flex justify-content-evenly">
                        <div className="client-img">
                          <img src="img/testimonials/client-2.jpg" 
                          className="rounded-circle img-fluid" />
                    </div>                                
                      <div className="name mt-2">
                      <h5>Mary Kilobi</h5>
                      <p className="fw-light">Sales Manager - <span>Kiko Meko</span></p>
                      </div>
                      </div>
                    </div>
                  </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                  <i className="bi bi-chat-left-quote" aria-hidden="true"></i>
                    <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                      </p>
                      <br />                          
                   <div className="d-flex justify-content-evenly">
                    <div className="client-img">
                      <img src="img/testimonials/client-5.jpg" className="rounded-circle img-fluid" />
                    </div>                                
                    <div className="name mt-2">
                    <h5>Dr. Nyikal Miwani</h5>
                    <p className="fw-light">Finance Manager - <span>Karen Hostpital</span></p>
                    </div>
                   </div>
                  </div>
                </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="t-card shadow">
                  <i className="bi bi-chat-left-quote" aria-hidden="true"></i>
                    <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quam, culpa eius! Ea voluptatibus mollitia hic eos.  
                      </p>
                      <br />                          
                      <div className="d-flex justify-content-evenly">
                        <div className="client-img">
                          <img src="img/testimonials/client-3.jpg" className="rounded-circle img-fluid" />
                        </div>                                
                        <div className="name mt-2">
                        <h5>Esther Zawadi</h5>
                        <p className="fw-light">digital strategist - <span>Bnb africa</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>           
              </div>
            </div>          
          </div>
          <div className="row text-center mt-5">
            <div className="col-lg-12 col-md-12">
              <a className="bi bi-chevron-left btn btn-outline-primary" href="#carouselExampleCaptions"
              data-bs-slide="prev"></a>
            <a className="bi bi-chevron-right btn btn-outline-primary" href="#carouselExampleCaptions"
              data-bs-slide="next"></a>
            </div>
          </div>        
        </div>
    </div>
  </section>
  );
};

export default Testimonial;
