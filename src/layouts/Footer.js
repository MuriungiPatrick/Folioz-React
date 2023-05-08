const Footer = () => {
  return (
<footer className="footer" id="contact">
  {/* START FOOTER SOCIAL MEDIA SECTION */}
    <div className="footer-sm" style="background-color: #212121;">
    <div className="container">
      <div className="row py-4 d-flex align-items-center">   
        <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0"> 
          <h6 className="mb-0 text-center">Connect with us on social Media!</h6>
        </div>
        <div className="col-12 col-md-6 col-lg-7 text-center">     
          <a href="#"><i className="bi bi-facebook" title="facebook" arial-hidden="true"></i></a> 
          <a href="#"><i className="bi bi-twitter" title="twitter" arial-hidden="true"></i></a>
          <a href="#"><i className="bi bi-tiktok" title="tiktok" arial-hidden="true"></i></a>
          <a href="#"><i className="bi bi-snapchat" title="tiktok" arial-hidden="true"></i></a>
          <a href="#"><i className="bi bi-linkedin" title="Linkedin" arial-hidden="true"></i></a>     
          <a href="#"><i className="bi bi-instagram" title="instagram" arial-hidden="true"></i></a> 
        </div>  
      </div>
    </div>
    </div>
        {/* START FOOTER CENTER */}
  
  <div className="container mt-3 footer-center">
    <div className="row mt-3 pb-3 justify-content-center">
      <div className="col-12 col-sm-6 col-lg-6 mx-auto mb-4">
        
      <div className="logo mb-5 pt-3">
        <img 
        src="img/logo/logo-footer.png" 
        alt="logo footer" 
        />
      </div>
        <p className="text-left">We are a creative digital agency offering crreative solutions around the world. 
          Here you can use rows and columns to organize your footer content. Loremsit amet, consectetur adipisicing elit.</p>   
      </div>
 
      
      <div className="col-12 col-sm-6 col-lg-2 mb-4">
        <h5 className="text-capitalize font-weight-bold">Services</h5>
        <hr className="bg-white mb-4 d-inline-block mx-auto" 
        style="width: 60px; height:2px"
        />
        <ul className="list-inline f-list">
          <li><a href="#">marketing.</a></li>
          <li><a href="#">analytics.</a></li>
          <li><a href="#">commerce.</a></li>
        <li><a href="#">insights</a></li>
        </ul>
      </div>
      
      <div className="col-12 col-sm-6 col-lg-2 mx-auto mb-4">

        <h5 className="text-capitalize font-weight-bold">Useful links</h5>
        <hr className="bg-white mb-4 d-inline-block mx-auto" 
        style="width: 60px; height:2px" 
        />
        <ul className="list-inline f-list">
        <li><a href="#">Your Account</a></li>
        <li><a href="#">pricing</a></li>
        <li><a href="#">documentation</a></li>
        </ul>
      </div>
      
      <div className="col-12 col-sm-6 col-lg-2 mx-auto mb-4">
        <h5 className="text-capitalize font-weight-bold">support</h5>
        <hr className="bg-white mb-4 d-inline-block mx-auto" 
        style="width: 60px; height:2px" 
        />
        <ul className="list-inline f-list">
        <li><a href="#">Guides</a></li>
        <li><a href="#">API status</a></li>
        <li><a href="#">cloud hosting</a></li>   
        </ul>
      </div>
    </div>
    </div> 
    
   
      <div className="footer-bottom pt-5 pb-5">
          <div className="container">
              <div className="row text-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                      <div className="footer-bottom__copyright">
                      <p>
                      Designed with love by{" "}
                      <a
                        className="line_anim"
                        href="https://themeforest.net/user/codeefly"
                        target="_blank"
                        rel="noreferrer"
                      >
                    Codewithpatrick
                   </a> {" "}
                    © {new Date().getFullYear()}
                  </p>                 
                  </div> 
              </div>            
                  <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                      <div className="footer-bottom__legalstuff">
                          <a href="index.html">Terms</a> |
                          <a href="http://www.vaxacode.com">Privacy</a>
                      </div> 
                  </div>            
              </div>
          </div>
      </div>
    </footer>
    
    
  );
};

export default Footer;
