import React from 'react'

const Faq = () => {

  return (
<section className="faq-section">
  <div className="text-center mb-5">
    <div className="topic-intro">
      <h6>faq?</h6>
    </div>
    <h2 className="display-3 fw-bold">Frequently Asked Questions?</h2>
    <p className="lh-lg text-gray-600">frequently asked questions, get knowledge before hand</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item shadow mt-3">
          <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button fw-bold" type="button" 
          data-bs-toggle="collapse" data-bs-target="#collapseOne" 
          aria-expanded="true" aria-controls="collapseOne">
           do you offer discounts
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo, 
            unde cum quod eos nostrum quam fuga placeat provident accusamus, 
            hic tempora officiis cumque sapiente quis. Fugiat molestias quis impedit.
          </div>
        </div>
      </div>
    <div className="accordion-item shadow mt-3">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          How long will the free trial last?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Repellendus ut ea praesentium itaque? Quaerat tenetur beatae debitis repellat ipsa, sed dolor,
           nemo quasi, repudiandae ducimus perferendis doloribus. 
          Suscipit tenetur repellendus eveniet fugit, id animi quo. Dolor nesciunt hic voluptate rerum?
        </div>
      </div>
    </div>        
  </div>
</div>    
</div>
</section>

  );
};

export default Faq;