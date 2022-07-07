import React from 'react'
import footer2 from '../images/payment.png';

const Footer = () => {
  return (
    
    <footer className="footer" id='footer'>
        <div className="container">
            <div className="row">


                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <a href="*">MADHANAM INN</a>
                        </div>
                        <p>The Customer is at the heart of our unique bussiness model, which include design.</p>
                        <a href="*"><img src={footer2}  alt='logo'/></a>
                    </div>
                </div>

                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer-widget">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="*">Home</a></li>
                            <li><a href="*">Services</a></li>
                            <li><a href="*">Portofolio</a></li>
                            <li><a href="*">Team</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-2  col-md-3 col-sm-6">
                    <div className="footer-widget">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="*">Features</a></li>
                            <li><a href="*">Testimonials</a></li>
                            <li><a href="*">Contact</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer-widget">
                        <h6>NewsLetter</h6>
                        <div className="footer-newslatter">
                            <p>Be the first to know about new arrivals, look books, sales and promos!</p>
                            <form action="*">
                                <input type="text" placeholder="Your Email" />
                                <button type="submit"><span><i className="fa fa-envelope"
                                            arial-hidden="true"></i></span></button>
                            </form>
                        </div>

                    </div>
                </div>


            </div>

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer-copyright-text">
                        <p>Copyright - 2021 All rights reserved | This template is made with <i className="fa fa-heart-o" arial-hidden="true"></i>
                             by <a href="*">SuryaBaskar</a></p>
                    </div>
                </div>
            </div>


        </div>

    </footer>
  )
}

export default Footer