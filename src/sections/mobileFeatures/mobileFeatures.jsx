import './mobileFeatures.css';
import Mobile from '../../assets/images/mobile.png';
import SmCard from '../../assets/images/smCard.png';
import Card2 from "../../component/Card2/Card2";
import Battery from '../../assets/images/battery.png';


function MobileFeatures(props) {
    return (
        <section className="m-lr-5 pt-5 d-flex flex-column m-sectionF">
            <h1 className="text-center">POSSIBILITIES. PERFORMANCE. POWER.</h1>
            <p className="card-text text-center pt-3 letterSpac"><small className="text-muted">FASTER PROCESSING WITH LESS
                POWER</small></p>
            <div className="mr-auto pos-relative img-size con m-cards-parent">
                <img sizes="100vw"
                     src={Mobile}
                     loading="lazy" className="con" alt="" width="1230" height="515"/>
                    <div className="m-card m-card1">
                        <div className="m-card-content m-card-content-1 {pww}">
                            <Card2 img={Battery}
                                   title1="48 MP CAMERA"
                                   className={"pt0"}
                                   className1={"border-0 disableHov"}
                                   paragraph="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."></Card2>
                        </div>
                        <div className="m-card-dot">
                            <span className="fa fa-plus m-card-dot-icon"></span>
                        </div>
                    </div>
                    <div className="m-card m-card2">
                        <div className="m-card-content m-card-content-2">
                            <Card2 img={Battery} title1="48 MP CAMERA" className={"pt0"} className1={"border-0 disableHov"} paragraph="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."></Card2>

                        </div>
                        <div className="m-card-dot">
                            <span className="fa fa-plus m-card-dot-icon"></span>
                        </div>
                    </div>
                    <div className="m-card m-card3">
                        <div className="m-card-content m-card-content-1">
                            <Card2 img={Battery}
                                   title1="48 MP CAMERA"
                                   className={"pt0"}
                                   className1={"border-0 disableHov"}
                                   paragraph="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."></Card2>

                        </div>
                        <div className="m-card-dot">
                            <span className="fa fa-plus m-card-dot-icon"></span>
                        </div>
                    </div>
                    <div className="m-card m-card4">
                        <div className="m-card-content m-card-content-2">
                            <Card2 img={Battery} title1="48 MP CAMERA" className={"pt0"} className1={"border-0 disableHov"} paragraph="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."></Card2>
                        </div>
                        <div className="m-card-dot">
                            <span className="fa fa-plus m-card-dot-icon"></span>
                        </div>
                    </div>
            </div>
        </section>
);
}

export default MobileFeatures;

