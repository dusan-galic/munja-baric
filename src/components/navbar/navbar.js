import './navbar.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <Link to="/" className="navbar-brand naslov">
                    FK MUNAJ BARIČ
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-link-ime" href="#">Takmičenja <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ime" href="#">Tim</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/galerija" className="nav-link nav-link-ime">
                                Galerija
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kids" className="nav-link nav-link-ime">
                                Munja KIDS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link nav-link-ime">
                                Munja SHOP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ime" href="#">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;