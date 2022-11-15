import React from 'react'
import slide1 from '../images/poster.jpg'
import slide2 from '../images/slider2.jpg'
import slide3 from '../images/slider3.jpg'
export default function slide() {
    
    return (
        <center>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={slide1} className="d-block w-100" alt="..." height={500} width={100} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={slide2} className="d-block w-100" alt="..." height={500}/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..." height={500}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br/><br/>
        </center>
    )
}