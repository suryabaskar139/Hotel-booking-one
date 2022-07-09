import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
 <section id="home">
    <div className="container text-center">
       <div className="row justify-content-center">
          <div className="col-md-10">
             <h1 className="text-white display-5">FIND YOUR NEXT STAY, PLAN YOUR TRIP</h1>
             <p className="text-white">With Madhanam you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you</p>
             <Link to="/signin">
             <button className='learn-more-btn'>Log In</button></Link>
             <Link to="/signup">
             <button className='mx-2 learn-more-btn'>Sign Up</button>
             </Link>

          </div>
       </div>
    </div>
 </section>

  )
}

export default Header