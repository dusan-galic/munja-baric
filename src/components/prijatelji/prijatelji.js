import { useState } from 'react';
import './prijatelji.css';

const Prijatelji = () => {

    const [sponzor, setSponzor] = useState({
        '1': '/munja_sponzori/Aca.png',
        '2': '/munja_sponzori/Akerman.png',
        '3': '/munja_sponzori/AS.png',
        '4': '/munja_sponzori/Bane.png',
        '5': '/munja_sponzori/CargoBova.png',
        '6': '/munja_sponzori/CleasCanis.png',
        '7': '/munja_sponzori/Dezeva.png',
        '8': '/munja_sponzori/Dragicevic.png',
        '9': '/munja_sponzori/Glass_invest.png',
        '10': '/munja_sponzori/God.png',
        '11': '/munja_sponzori/Golub.png',
        '12': '/munja_sponzori/Karadzic.png',
        '13': '/munja_sponzori/Kasped.png',
        '14': '/munja_sponzori/Kim.png',
        '15': '/munja_sponzori/Kojevic.png',
        '16': '/munja_sponzori/Kumric.png',
        '17': '/munja_sponzori/l_invest.png',
        '18': '/munja_sponzori/M_K.png',
        '19': '/munja_sponzori/Mrdja.png',
        '20': '/munja_sponzori/Naam.png',
        '21': '/munja_sponzori/NedeljaM.png',
        '22': '/munja_sponzori/Obrad.png',
        '23': '/munja_sponzori/pepper.png',
        '24': '/munja_sponzori/PoliBiro.png',
        '25': '/munja_sponzori/Rampa.png',
        '26': '/munja_sponzori/RancSava.png',
        '27': '/munja_sponzori/Ristic.png',
        '28': '/munja_sponzori/simsped.png',
        '29': '/munja_sponzori/Sinisa.png',
        '30': '/munja_sponzori/Slavijatrans.png',
        '31': '/munja_sponzori/soccer.png',
        '32': '/munja_sponzori/Stojanovic.png',
        '33': '/munja_sponzori/Teodora.png',
        '34': '/munja_sponzori/Tonci.png',
        '35': '/munja_sponzori/Traco.png',
        '36': '/munja_sponzori/Vlada.png',
        '37': '/munja_sponzori/Volan.png',
        '38': '/munja_sponzori/Whitedental.png',
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 oklubu">
                    <h3>Пријатељи клуба:</h3>
                </div>
            </div>
            <div className="row">                    
                {
                    Object.keys(sponzor).map((key) => (
                        <div className="col-lg-2 col-md-3 col-4 sponzor" key={sponzor[key]}>
                            <img className="ikon" src={process.env.PUBLIC_URL + sponzor[key]} alt={sponzor[key]} width="100px" />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Prijatelji;