import Card2 from "../../component/Card2/Card2";
import Cpu from "../../assets/images/cpu.png";
import Ic from "../../assets/images/ic.png";
import CameraLenses from "../../assets/images/cameraLenses.png";
import './section2.css';
import Headers from './../../component/headers/headers'
function Section2() {
    return (
        <div className="backgroundSec">
        <Headers first="OSSIBILITIES. PERFORMANCE. POWER." second="FASTER PROCESSING WITH LESS POWER"/>
            <div
                className="mx-5 pt-2 d-flex row justify-content-lg-around justify-content-md-center justify-content-md-around-1 ">
                <div className="card border-0 col-lg-4 col-md-4 col-sm-12">
                    <Card2 img={Cpu} title1="PERFECT CUT" title2="DUAL CAMERA"
                           paragraph="Tristique senectus et netus et malesuada ant reiet fames massa."></Card2>
                </div>
                <div className="card border-0 col-lg-4 col-md-4 col-sm-12">
                    <Card2 img={Ic} title1="MOST POPULAR " title2="8GB DDR5 RAM"
                           paragraph="Dictum varius duis at consectetur lorem donec massa sap faucibus."></Card2>
                </div>
                <div className="card border-0 col-lg-4 col-md-4 col-sm-12">
                    <Card2 img={CameraLenses} title1="PRETTY" title2="INTELLIGENT"
                           paragraph="Consequat ac habit amet asse felis donec et odio pellentesque diam."></Card2>
                </div>
            </div>
        {/*</section>*/}
        </div>
    );
}
export default Section2;