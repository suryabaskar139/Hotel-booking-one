import React from 'react'
import gallery1 from '../images/gallery/1.webp'
import gallery2 from '../images/gallery/2.webp'
import gallery3 from '../images/gallery/3.webp'
import gallery4 from '../images/gallery/4.webp'
import gallery5 from '../images/gallery/5.webp'
import gallery6 from '../images/gallery/6.webp'

const Rooms = () => {
  return (

    <section id="rooms" className="gallery_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 section-title text-center mb-5">
                    <h6>Best Pictures Of Our Hotel</h6>
                    <h3>Our Gallery</h3>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery1} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"></div>
                </div>
                <div className="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery2} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"></div>
                </div>
                <div className="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery3} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"></div>
                </div>
                <div className="col-lg-3 col-md-6 gallery-item">
                    <img src={gallery4} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"></div>
                </div>
                <div className="col-md-6 gallery-item">
                    <img src={gallery5} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"> </div>
                </div>
                <div className="col-md-6 gallery-item">
                    <img src={gallery6} className="img-fluid w-100" alt='logo'/>
                    <div className="gallery-item-content"> </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rooms