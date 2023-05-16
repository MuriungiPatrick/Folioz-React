import React from 'react'

function Video() {
  return (
  <><section className="section-with-video">
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
    </section><section className="section-ntop">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 mt-5">
              <div className="video-box bg-primary shadow">
                <img className="img-fluid"
                  src="img/youtube-4.png"
                  alt="Vaxa code youtube channel" />
                <a className="glightbox position-absolute top-50 start-50 translate-middle"
                  href="#">
                  <span className="video-button">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-play-circle-fill"
                      viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </span>
                  <span className="border-animation border-1"></span>
                  <span className="border-animation border-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Video;