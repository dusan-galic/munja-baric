import Slide from '../slide/slide';
import OKlubu from '../o_klubu/o_klubu';
import Takmicenja from '../takmicenja/takmicenja';
import Prijatelji from '../prijatelji/prijatelji';
import Footer from '../footer/footer';

const Glavna = () => {

    return (
        <div>
            <Slide />
            <OKlubu />
            <Takmicenja />
            <Prijatelji />
            <Footer />
        </div>
    )
}

export default Glavna;