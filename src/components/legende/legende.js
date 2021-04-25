import './legende.css';

const Legende = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 legende">
                    <h3>Легенде клуба:</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="misa">Миша Тумбас (19** - 2020)</p>
                    <img className = "ikon" src="./misa.jpg"  alt="MisaTumbas" width="600px" />
                </div>
            </div>
        </div>
    )
}

export default Legende;