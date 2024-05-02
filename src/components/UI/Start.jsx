import React from 'react'
import "../../styles/start.css";
import trainerImg from '../../assets/img/trainer.png';

const Start = () => {
  return (
    <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt=''/>
                </div>
                <div className="start__content">
                    <h2 className="section__title">Ready to make a <span className='highlights'>Change ?</span></h2>
                    <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                    <button className='register__btn'>Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start
