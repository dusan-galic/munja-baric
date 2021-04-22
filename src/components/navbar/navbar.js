import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <Link to="/" className="navbar-brand naslov">
                    ФК МУЊА БАРИЧ
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="nav-link nav-link-ime"
                        to="/"
                    >
                    Клуб
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="nav-link nav-link-ime"
                        to="/galerija"
                    >
                    Галерија
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="nav-link nav-link-ime"
                        to="/kids"
                    >
                    Муњице
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="nav-link nav-link-ime"
                        to="/shop"
                    >
                    Муња продавница
                    </NavLink>

                        {/*<li className="nav-item">
                            <a className="nav-link nav-link-ime active" href="#oklubu">Клуб</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-ime" href="#">Такмичења</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/galerija" className="nav-link nav-link-ime">
                                Галерија
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kids" className="nav-link nav-link-ime">
                                Муња деца
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link nav-link-ime">
                                Муња продавница
                            </Link>
                        </li>*/}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;