import React from 'react'

function Cta() {
  return (
    <section className="get-started">
    <div className="container">
      <div className="row">
          <div className="col-lg-7 col-sm-12">
            <div className="headline">
              <h3 className="display-3 fw-normal text-primary">Ready to dive in?</h3>
                 <h5>Let's work together</h5>
                </div>
              </div>                             
          <div className="col-lg-5 col-sm-12">   
            <div className="start justify-content-center">
              <a 
              className="btn btn-primary w-100 mb-2 p-3" data-bs-toggle="modal" 
            data-bs-target="#exampleModal-1">
                <h5><i className="bi bi-hand-thumbs-up"></i> Get Started</h5> 
              </a>  
              <a href="#" 
              className="btn btn-outline-primary w-100 mb-2 p-3">
                <h5><i className="bi bi-envelope-check"></i> info@folioz.agency</h5> 
                <p className="subtitle">Drop us an Email</p>
              </a>  
            </div>
        </div>
     </div>
    </div>
    
  </section>
  )
}

export default Cta