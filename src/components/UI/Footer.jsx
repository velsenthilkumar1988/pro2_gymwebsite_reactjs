import React from 'react'
import "../../styles/footer.css";
import logoImg from "../../assets/img/extended.png";
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            {/**logo */}
            <div className="logo">
              <div className="logo__img">
                <img src={logoImg} alt="" />
                <h2>FitBody</h2>
              </div>
              <p>The page will automatically reload if you make changes to the<br/>
              code. You will see the build errors and lint warnings.</p>
            </div>
            {/**logo */}
          </div>
          {/** Footer box */}
          <div className="footer__box">
                <h4 className="footer__title">Company Name</h4>
                <ul className="footer__links">
                    <li><a href='#'></a>Our Program</li>
                    <li><a href='#'></a>Our Plan</li>
                    <li><a href='#'></a>Become a Member</li>
                </ul>
            </div>
            {/** Footer box */}

            {/** Footer box */}
          < div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>
                <ul className="footer__links">
                    <li><a href='#'></a>About Us</li>
                    <li><a href='#'></a>Contact Us</li>
                    <li><a href='#'></a>Support</li>
                </ul>
            </div>
            {/** Footer box */}

            {/** Footer box */}
          < div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>
                <ul className="footer__links">
                    <li><a href='#'></a>About Us</li>
                    <li><a href='#'></a>Contact Us</li>
                    <li><a href='#'></a>Support</li>
                </ul>
            </div>
            {/** Footer box */}
            
        </div>
        
      </div>
      <p className='copyright'>Copyright @ {year} | All right reserved</p>
    </footer>
  );
}

export default Footer
