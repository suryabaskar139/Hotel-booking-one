import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing-area' id='pricing'>
        <div className='container'>
            <div className='row'>

               <div className="col-sm-12 section-title text-center mb-5">
                    <h6>We offers </h6>
                    <h3>Our Affordable Pricing</h3>
                </div>

            <div className='col-lg-4 col-md-6'>
                    <div className='single-pricing'>
                        <div className='head-text'>
                            <h3>NIGHT</h3>
                        </div>
                        <div className='price-area'>
                            <span className='duration'>400 INR</span>
                        </div>
                        <div className='feature-area'>
                            <ul>
                                <li>Free Wifi</li>
                                <li>Complementary food</li>
                                <li>Massage</li>
                                <li>Saloon and Spa</li>
                                <li>Pre-booking System</li>
                            </ul>
                        </div>
                        <div className='btn-area'>
                            <a href='*'>Book Now</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                    <div className='single-pricing'>
                        <div className='label-area best-deal'>
                            <span>Popular</span>
                        </div>
                        <div className='head-text'>
                            <h3>DAY</h3>
                        </div>
                        <div className='price-area'>
                            <span className='duration'>800 INR</span>
                        </div>
                        <div className='feature-area'>
                            <ul>
                                <li>Free Wifi</li>
                                <li>Complementary food</li>
                                <li>Massage</li>
                                <li>Saloon and Spa</li>
                                <li>Pre-booking System</li>
                            </ul>
                        </div>
                        <div className='btn-area'>
                            <a href='*'>Book Now</a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                    <div className='single-pricing'>
                    <div className='label-area best-deal'>
                            <span>Premium</span>
                        </div>
                        <div className='head-text'>
                            <h3>WEEK</h3>
                        </div>
                        <div className='price-area'>
                            <span className='duration'>1200 INR</span>
                        </div>
                        <div className='feature-area'>
                            <ul>
                                <li>Free Wifi</li>
                                <li>Complementary food</li>
                                <li>Massage</li>
                                <li>Saloon and Spa</li>
                                <li>Pre-booking System</li>
                            </ul>
                        </div>
                        <div className='btn-area'>
                            <a href='*'>Book Now</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Pricing