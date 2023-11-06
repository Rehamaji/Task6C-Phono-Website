import './home.css';
import Hero from "../../sections/hero/hero";
import PhoneSlider1 from '../../assets/images/phonoSlider1.webp'
import PhoneSlider2 from '../../assets/images/phonoSlider2.webp'
import PhoneSlider3 from '../../assets/images/phonoSlider3.webp'

import Section1 from "../../sections/section1/section1";
import Section2 from "../../sections/section2/section2";
import MobileFeatures from "../../sections/mobileFeatures/mobileFeatures";
import Section4 from "../../sections/section4/section4";
import Section5 from "../../sections/section5/section5";
import {Accordion} from "react-bootstrap";
import CarouselSec from "../../sections/carouselSec/carouselSec";
import OccordionSec from "../../sections/occordionSec/occordion";
import SubscripeNow from "../../sections/subscripNow/subscripeNow";
import Footer from "../../component/footer/footer";

function Home() {
    return (
        <div className="App">
            <Hero header1="Curvy Bevel Dual Audio"
                  p1="Zania Black Edition"
                  img1={PhoneSlider1}
                  header2="Curvy Bevel Dual Audio"
                  p2="Zania Black Edition"
                  img2={PhoneSlider2}
                  header3="Curvy Bevel Dual Audio"
                  p3="Zania Black Edition3"
                  img3={PhoneSlider3}
            />

            <Section1/>
            <Section2/>
            <MobileFeatures/>
            <Section4/>
            <Section5/>
            <Accordion/>

            <OccordionSec/>
            <CarouselSec/>
            <SubscripeNow/>
        </div>
    );
}

export default Home;
