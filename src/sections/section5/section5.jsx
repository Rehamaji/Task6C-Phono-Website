import './section5.css';
import Card3 from "../../component/card3/card3";
import Wifi from "../../assets/images/wifi.png";
import Network from "../../assets/images/network.png";
import Cloud from "../../assets/images/cloud.png";
import Cpu2 from "../../assets/images/cpu2.png";
import Headphone from "../../assets/images/headphone.png";
import Lines from "../../assets/images/lines.png";
import Iphone14 from "../../assets/images/iphone14.png";
import Headers from "../../component/headers/headers";

function Section5() {
    return (
        <section className="mx-5">

          <Headers first="INNOVATIVE QUALITIES & FEATURES" second="SHOW YOURS TO THE WORLD"/>

            <div className="row justify-content-around pt-5 justify-content-between">
                <div className="card mb-3 card border-0 col-xl-4 col-md-6 order-xl-1 order-2">
                    <Card3 direction="left"  image={Wifi} title="4.0 WIFI SPECS" paragraph="Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum sed iacus."></Card3>
                    <Card3 direction="left"  image={Network} title="MULIT TASKING & THREADING" paragraph="Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi ."></Card3>
                    <Card3 direction="left"  image={Cloud} title="CLOUD STORAGE" paragraph="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"></Card3>
                </div>
                <div className="card border-0           col-xl-4 col-lg-12 order-xl-2  order-1 ">
                    <img src={Iphone14}
                          sizes="(min-width: 1300px) 600px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                         className="m-auto"
                         alt="" loading="lazy" width="381" height="551"/>
                </div>
                <div className="card mb-3 card border-0 col-xl-4 col-md-6 order-xl-3 order-3">
                    <Card3 direction="right"  image={Cpu2} title="INTELLIGENT PROCESSOR" paragraph="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"></Card3>
                    <Card3 direction="right"  image={Headphone} title="HD SURROUND AUDIO" paragraph="Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am"></Card3>
                    <Card3 direction="right"  image={Lines} title="STYLISH BEVEL EDGES" paragraph="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"></Card3>
                </div>
            </div>
        </section>
);
}
export default Section5;