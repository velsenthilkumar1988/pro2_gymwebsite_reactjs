import React from 'react'
import heroImg from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/extended.png';
import '../../styles/hero.css';

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/** Hero Content Start */}
          <div className="hero__content">
            <h2 className="section__title">
              Exercise is the key to a{" "}
              <span className="highlights"> Healthy</span> LifeStyle
            </h2>
            <p>
              The page will automatically reload if you make changes to the<br/>
              code. You will see the build errors and lint warnings.
            </p>
            <div className="hero_btns">
              <button className="register__btn">Get Started</button>
              <button className="watch_btn">
                <span>
                  <i class="ri-play-circle-line"></i>
                </span>
                Watch Videos
              </button>
            </div>
          </div>
          {/** Hero Content Start End */}
          {/** Hero Img Start */}
          <div className="hero__img">
            <div className="hero__img_wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate">
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-add-fill"></i>
                </span>
                <h6>2577 BPM</h6>
              </div>

              <div className="gym__location">
                <h5>Location</h5>
                <span>
                  <i class="ri-map-pin-fill"></i>
                </span>
                <h6>Find a new Gym near you</h6>
              </div>

              <div className="dumble__icon">
                <i class="ri-user-location-fill"></i>
              </div>
            </div>
          </div>
          {/** Hero Img End */}
        </div>
      </div>
    </section>
  );
}

export default Hero
