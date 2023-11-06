import './carouselSec.css';
import CarouselCom from "../../component/CarouselCom/CarouselCom";
import Headers from "../../component/headers/headers";


function CarouselSec() {
    return (
        <section className="mx-5 pb-5">
            <Headers first="NEW ARRIVALS" second="FIND THE PERFECT PHONE FOR YOU"/>
             <CarouselCom/>
        </section>
    );
}

export default CarouselSec;

