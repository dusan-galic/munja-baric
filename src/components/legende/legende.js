import './legende.css';

const Legende = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 oklubu">
                    <h3>Легенде клуба:</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <p className="misa">Миша Тумбас (19** - 2020)</p>
                    <img className = "ikon leg" src="./misa.jpg"  alt="MisaTumbas" width="600px" />
                </div>
            </div>
        </div>
    )
}

export default Legende;