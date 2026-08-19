import image1 from '../assets/kmrc_image_1.jpg'
import image2 from '../assets/kmrc_image_2.jpg'
import image3 from '../assets/kmrc_image_3.jpeg'

function Carousels() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide metro-carousel" data-bs-ride="carousel">
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
    )
}

export default Carousels;