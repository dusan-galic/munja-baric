import './footer.css';

const Footer = () => {

    return (
        <div className="container-fluid footer_d">
            <footer className="text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-6 mb-md-0">
                    <h5 className="text-uppercase">ФК Муња Барич</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                    voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>

                <div className="col-lg-6 col-md-12 mb-6 mb-md-0">
                    <h5 className="text-uppercase">Линкови</h5>

                    <ul className="list-unstyled mb-0">
                    <li>
                        <a href="http://localhost:3000/galerija"
                         target="_blank"
                         className="text-dark">
                             Галерија
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/kids"
                        target="_blank"
                        className="text-dark">
                            Муњице
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/shop" 
                        target="_blank"
                        className="text-dark">
                            Продавница
                        </a>
                    </li>
                    <li>
                        <a href="http://www.fsb.org.rs/opstinska-liga-obrenovac?todo=edit&file=opstinska_liga_obrenovac.l98" 
                        target="_blank"
                        className="text-dark">
                            Табела
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="text-center p-3 autor">
                © 2021 Copyright:
                <br/>
                Д.Г.<a className="text-dark" 
                href="https://www.instagram.com/dusan_galic95/"
                target="_blank">
                <img className = "ikon" src="../instagram.svg"  alt="Munja instagram" height="30px" width="30px" />
                </a>
                М.Ј.<a className="text-dark" 
                href="https://www.instagram.com/marina.jevtovic/?hl=sr"
                target="_blank">
                <img className = "ikon" src="../instagram.svg"  alt="Munja instagram" height="30px" width="30px" />
                </a>
                О.Г.<a className="text-dark" 
                href="https://www.instagram.com/ognjenngalic/"
                target="_blank">
                <img className = "ikon" src="../instagram.svg"  alt="Munja instagram" height="30px" width="30px" />
                </a>
            </div>
            </footer>
        </div>
    )
}

export default Footer;