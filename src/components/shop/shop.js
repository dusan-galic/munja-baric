import { useState } from 'react';
import './shop.css';

const Shop = () => {

    const [artikal, setArtikal] = useState([
        {
            'put': '../munja_shop/m_majca.png',
            'naziv': 'Мајца',
            'cena': '2500',
            'velicina': 'S, M, L, XL, XXL'
        },
        {
            'put': '../munja_shop/m_majca.png',
            'naziv': 'Мајца',
            'cena': '2500',
            'velicina': 'S, M, L, XL, XXL'
        },
        {
            'put': '../munja_shop/m_majca.png',
            'naziv': 'Мајца',
            'cena': '2500',
            'velicina': 'S, M, L, XL, XXL'
        },
        {
            'put': '../munja_shop/m_majca.png',
            'naziv': 'Мајца',
            'cena': '2500',
            'velicina': 'S, M, L, XL, XXL'
        }
    ]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12, col-md-12, col-sm-12, col-12 munja-shop">
                    <h3>МУЊА ПРОДАВНИЦА</h3>
                </div>
            </div>
            <div className="row">
                {
                    artikal.map((a) => (
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="card cart-my">
                                <img className="card-img-top" src={a.put} alt={a.put} />
                                <div className="card-body">
                                <p className="card-text">
                                    <b>{a.naziv}</b><br />
                                    <b>Цена:</b> {a.cena} дин<br />
                                    <b>Величина:</b> {a.velicina} <br />
                                </p>
                                </div>
                            </div>
                        </div>
                        )                        
                    )}
            </div>
        </div>
    )
}

export default Shop;