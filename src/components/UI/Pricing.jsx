import React from 'react'
import "../../styles/pricing.css";
const Pricing = () => {
  return (
    <section id="pricing">
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">Gym <span className='highlights'> Pricing</span> Plan</h2>
                <p>The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings.</p>
            </div>

            {/**Pricing Wrapper Start */}
            <div className="pricing__wrapper">
                <div className="pricing__item  pricing__item_01">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Regular Member</h2>
                        <h2 className='pricing'>Rs.250 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class="ri-folder-check-fill"></i></span> Ultimate Access to Gym.</li>
                            <li><span><i class="ri-folder-check-fill"></i></span> Customer Supports</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>5 Classes Per Week</li>
                        </ul>
                        <button className='register__btn'>Join Now</button>
                   </div>
                </div>  

                <div className="pricing__item pricing__item_02">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Standard Member</h2>
                        <h2 className='pricing'>Rs.250 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class="ri-folder-check-fill"></i></span> Ultimate Access to Gym.</li>
                            <li><span><i class="ri-folder-check-fill"></i></span> Customer Supports</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>5 Classes Per Week</li>
                        </ul>
                        <button className='register__btn'>Join Now</button>
                   </div>
                </div>

                <div className="pricing__item pricing__item_03">
                    <div className="pricing__card-top">
                        <h2 className='section__title'>Advanced Member</h2>
                        <h2 className='pricing'>Rs.250 <span>/month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class="ri-folder-check-fill"></i></span> Ultimate Access to Gym.</li>
                            <li><span><i class="ri-folder-check-fill"></i></span> Customer Supports</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>Standard options</li>
                            <li><span><i class="ri-folder-check-fill"></i></span>5 Classes Per Week</li>
                        </ul>
                        <button className='register__btn'>Join Now</button>
                   </div>
                </div>


            </div>    
            {/**Pricing Wrapper End */}

        </div>
    </section>
  )
}

export default Pricing
