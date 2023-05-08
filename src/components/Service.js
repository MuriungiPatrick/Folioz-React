import { useEffect, useState } from "react";


const Service = () => {
  
  return (

<section id="services" className="services-section">
  <div className="container">
    <div className="row text-center mb-2">
     <div className="topic-intro">
      <h6>what we offer</h6>
     </div>
          <h3 className="display-3 fw-bold">Our Services</h3>
            <div className="heading-line mx-auto"></div>
            <p className="fw-light p-3">
              Lorem ipsum dolor sit amet consectetur architecto magni, 
              dicta maxime laborum
            </p>
    </div>
    <div className="row mt-5">
				<div className="col-md-6 col-lg-4">
					<div className="services card bg-white rounded-2 shadow p-4">
						<div className="icon d-flex align-items-center justify-content-center shadow-sm">
              <span><i className="bi bi-grid"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">Brand Identity</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?
              </p>
            </div>
					</div> 
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="services card d-block bg-white rounded-2 shadow p-4">
						<div className="icon shadow d-flex align-items-center justify-content-center">
              <span><i className="bi bi-globe2"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">Digital Marketing </h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?
              </p>
            </div>
					</div> 
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="services card d-block bg-white rounded-2 shadow p-4">
						<div className="icon shadow d-flex align-items-center justify-content-center">
              <span><i className="bi bi-pencil-square"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">Web design</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?
              </p>
            </div>
          </div> 
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="services card d-block bg-white rounded-2 shadow p-4">
						<div className="icon shadow d-flex align-items-center justify-content-center">
              <span><i className="bi bi-laptop"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">IT Consulting</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?
              </p>
            </div>
					</div> 
        </div>
        <div className="col-md-6 col-lg-4">
					<div className="services card bg-white rounded-2 shadow p-4">
						<div className="icon d-flex align-items-center justify-content-center shadow-sm">
              <span><i className="bi bi-cloud-check"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">Clowd Computing</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?</p>
            </div>
					</div> 
        </div>
        <div className="col-md-6 col-lg-4">
					<div className="services card bg-white rounded-2 shadow p-4">
						<div className="icon d-flex align-items-center justify-content-center shadow-sm">
              <span><i className="bi bi-vector-pen"></i></span>
            </div>
						<div className="service-body">
							<h3 className="mb-3">Graphic Design</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eos ad error nobis reprehenderit doloremque perspiciatis deserunt?</p>
              </div>
            </div> 
          </div>    
        </div>
    </div>

</section>


  
  );
};

export default Service;
