import './slide.css';

const Slide = () => {

    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    {/* <li data-target="#carouselExampleCaptions" data-slide-to="1"></li> */}
                    {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/navijaci.jpg" className="d-block w-100 img-fluid slide" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="naslov">ФК МУЊА БАРИЧ</h5>
                            <p className="naslov-opis">Наши навијачи</p>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img src="../igraci.jpg" className="d-block w-100 img-fluid slide" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="naslov">ФК МУЊА БАРИЧ</h5>
                            <p className="naslov-opis">Наши играчи</p>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                        <img src="../galerija/IMG_00J.jpeg" className="d-block w-100 img-fluid slide" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="naslov">ФК МУЊА БАРИЧ</h5>
                            <p className="naslov-opis">Наша деца</p>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slide;