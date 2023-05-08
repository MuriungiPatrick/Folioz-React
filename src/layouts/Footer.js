const Footer = () => {
  return (
    <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="logo">
                <img src="img/logo/logo-footer.png" alt="logo image" />
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a href="https://facebook.com/downfric">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/downfric">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/downfric">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <div className="bottom">
              <div className="left">
                <p>
                  Designed with love by{" "}
                  <a
                    className="line_anim"
                    href="https://twitter.com/itsmuriungi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Patrick
                  </a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a className="line_anim" href="terms-and-conditions">
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="privacy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="/support">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
    </div>
  );
};

export default Footer;
