import './takmicenja.css';

const Takmicenja = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 oklubu">
                    <h3>Такмичења:</h3>
                </div>
            </div>
            <div className="row takmicenje">
                <div className="col-lg-6">
                    <iframe width="500" height="315" 
                        src="https://www.youtube.com/embed/ODsOheK9zZQ" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="col-lg-6">
                    <h4>Општинска лига Обреновац</h4>
                    <a href="http://www.fsb.org.rs/opstinska-liga-obrenovac?todo=edit&file=opstinska_liga_obrenovac.l98"
                    target="_blank">
                        Табела
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Takmicenja;