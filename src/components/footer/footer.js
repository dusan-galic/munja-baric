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
                        <a href="http://localhost:3000"
                         className="text-dark">
                             Насловна
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/galerija"
                         className="text-dark">
                             Галерија
                        </a>
                    </li>
                    {/* <li>
                        <a href="http://localhost:3000/kids"
                        className="text-dark">
                            Муњице
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="http://localhost:3000/shop"
                        className="text-dark">
                            Продавница
                        </a>
                    </li> */}
                    <li>
                        <a href="http://www.fsb.org.rs/opstinska-liga-obrenovac?todo=edit&file=prva_opstinska_liga_obrenova.l98" 
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
                href="https://rs.linkedin.com/in/dusan-galic-ab937b1ab"
                target="_blank">
                <img className = "ikon" src="../in.svg"  alt="dusanln" height="30px" width="30px" />
                </a>
                М.Ј.<a className="text-dark" 

                href="https://rs.linkedin.com/in/marina-jevtovic-8b8664196"
                target="_blank">
                 <img className = "ikon" src="../in.svg"  alt="marinaln" height="30px" width="30px" />
                </a>
                О.Г.<a className="text-dark" 
                href="https://www.instagram.com/ognjenngalic/"
                target="_blank">
                <img className = "ikon" src="../instagram.svg"  alt="ognjeninstagram" height="30px" width="30px" />
                </a>
            </div>
            </footer>
        </div>
    )
}

export default Footer;