
import { useEffect, useRef } from 'react';
import * as Bootstrap from 'bootstrap';

import image1 from '../assets/kmrc_image_1.jpg';
import image2 from '../assets/kmrc_image_2.jpg';
import image3 from '../assets/kmrc_image_3.jpeg';

function Carousels() {
    const carouselRef = useRef(null);

    useEffect(() => {
        let carouselInstance = null;

        if (carouselRef.current) {
            const BootstrapObj = window.bootstrap || Bootstrap;

            if (BootstrapObj && BootstrapObj.Carousel) {
                carouselInstance = new BootstrapObj.Carousel(carouselRef.current, {
                    interval: 3000, // Time in milliseconds between slides
                    ride: 'carousel',
                    wrap: true
                });

                carouselInstance.cycle();
            }
        }
        return () => {
            if (carouselInstance) {
                carouselInstance.dispose();
            }
        };
    }, []);

    return (
        <>
            <div
                ref={carouselRef}
                id="carouselExampleAutoplaying"
                className="carousel slide metro-carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block metro-carousel-image" alt="Kolkata Metro underwater train" />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block metro-carousel-image" alt="Kolkata Metro train" />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block metro-carousel-image" alt="Kolkata Metro history" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousels;
