import './o_klubu.css';

const OKlubu = () => {

    return (
        <div id="oklubu" className="container">
            <div className="row">
                <div className="col-lg-12 oklubu">
                    <h3>О клубу:</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                <video id="munja_video" width="900px" controls >
                    <source src="./fkmb_video.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12 takst">
                    <ul style={{"listStyleType": "none"}}>
                        <li>Име клуба: ФК Муња Барич</li>
                        <li>Адреса клуба: Обреновачки пут 100, 11504 Барич</li>
                        <li>Датум оснивања: --------</li>
                        <li>Стадион: Прва Искра Барич</li>
                        <li>Терен димензија: 100 x 65m</li>
                        <li>Капацитет: 500</li>
                        <li>Телефон клуба: +381 55 5555 555</li>
                        <li>Mail: baricmunja@gmail.com</li>
                        <li>Боје дресова: Жуто-црна</li>
                        <li>Резервне боје: Жуто-црна</li>
                        <li>Навијачи: БАРИЧКИ КОРПУС</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                <img src="../munja_grb.png" alt="..." />
                </div>
                <div className="col-lg-4 col-md-12 col-12 takst">
                    <h4>Пратите нас!</h4>
                    <a className="logo" href = "https://www.instagram.com/fk_baric_munja/" target="_blank">
						<img className = "ikon" src="../instagram.svg"  alt="Munja instagram" height="40x" width="40px" />
					</a><br/>
                    <a className="logo" href = "https://sr-rs.facebook.com/pages/category/Sports-Team/FK-MUNJA-BARIC-1601073110144717/" target="_blank">
						<img className = "ikon" src="../facebook.svg"  alt="Munja facebook" height="40x" width="40px" />
					</a>
                </div>
            </div>
            
        </div>
    )
}

export default OKlubu;