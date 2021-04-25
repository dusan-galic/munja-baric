import Slide from '../slide/slide';
import OKlubu from '../o_klubu/o_klubu';
import Takmicenja from '../takmicenja/takmicenja';
import Prijatelji from '../prijatelji/prijatelji';
import Legende from '../legende/legende';
import Footer from '../footer/footer';

const Glavna = () => {

    return (
        <div>
            <Slide />
            <OKlubu />
            <Takmicenja />
            <Prijatelji />
            <Legende />
            <Footer />
        </div>
    )
}

export default Glavna;