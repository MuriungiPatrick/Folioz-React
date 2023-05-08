const Footer = () => {
  return (
<footer className="footer pt-5">
  <div className="container mt-3 footer-center">
    <div className="row mt-3 pb-3 justify-content-center">
      <div className="col-12 col-sm-6 col-lg-6 mx-auto mb-4">     
      <div className="logo mb-5 pt-3">
        <img src="img/logo/logo-footer.png" alt="logo footer" />
      </div>
        <p className="text-left">We are a creative digital agency offering crreative solutions around the world. 
          Here you can use rows and columns to organize your footer content. Loremsit amet, consectetur adipisicing elit.</p>   
      </div>
 
  <div className="col-12 col-sm-6 col-lg-2 mb-4">
    <h5 className="text-capitalize font-weight-bold">Services</h5>
    <ul className="list-inline f-list">
      <li><a href="#">marketing.</a></li>
      <li><a href="#">analytics.</a></li>
      <li><a href="#">commerce.</a></li>
    <li><a href="#">insights</a></li>
    </ul>
  </div>


  <div className="col-12 col-sm-6 col-lg-2 mx-auto mb-4"> 
    <h5 className="text-capitalize font-weight-bold">Useful links</h5>
    <ul className="list-inline f-list">
    <li><a href="#">Your Account</a></li>
    <li><a href="#">pricing</a></li>
    <li><a href="#">documentation</a></li>
    </ul>
  </div>
</div>
</div>
<div className="footer-bottom">
    <div className="container">
          <div className="copyright_inner">
            <div className="bottom">
              <div className="center">
                <p>
                  Designed with love by{" "}
                  <a
                    className="line_anim"
                    href="https://downfric.com"
                    target="_blank"
                    rel="noreferrer">
                    codewithpatrick</a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
            </div>
           
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </footer>
  );
};

export default Footer;
