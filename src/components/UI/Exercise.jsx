import React from 'react'
import "../../styles/exercise.css";
import lungsImg from "../../assets/img/lunges.png";
import yogaImg from "../../assets/img/yoga-pose.png";
import extendImg from "../../assets/img/extended.png";


const Exercise = () => {
  return (
    <section>
        <div className="container exercise__container">
            <div className="exercise__top">
                <h2 className="section__title">
                    Benefits of <span className='highlights'>Exercise</span>
                </h2>
                <p>The page will automatically reload if you make changes to the<br/>
              code. You will see the build errors and lint warnings.</p>
            </div>

            {/** Exercise LIst start */}
            <div className="exercise__wrapper">
              <div className="exercise__item">
                <span className="exercise__icon">
                  <img src={lungsImg} alt="" />
                </span>
                
                <div className="exercise__content">
                    <h4>Increased Flexibility</h4>
                    <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                </div>

              </div>

              <div className="exercise__item">
                <span className="exercise__icon">
                  <img src={yogaImg} alt="" />
                </span>
                
                <div className="exercise__content">
                    <h4>Healthy Life</h4>
                    <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                </div>
              </div>

              <div className="exercise__item">
                <span className="exercise__icon">
                  <img src={extendImg} alt="" />
                </span>
                
                <div className="exercise__content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>The page will automatically reload if you make changes to the
                    code. You will see the build errors and lint warnings.</p>
                </div>
              </div>

            </div>
            {/** Exercise LIst start End*/}

        </div>
    </section>
  )
}

export default Exercise
