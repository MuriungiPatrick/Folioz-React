import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import { render } from 'react-dom';


function Faq() {
  
  return (

<section className="faq-section">
  <div className="text-center mb-5">
    <div className="topic-intro">
      <h6>faq?</h6>
    </div>
    <h2 className="display-3 fw-bold">Frequently Asked Questions?</h2>
    <p className="lh-lg text-gray-600">frequently asked questions, get knowledge before hand</p>
  </div>
<Container>
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
    <Accordion>
       <h2>Accordion</h2> 
    </Accordion>
    </div>    
  </div>
</Container>
</section>

  );
}


export default Faq;