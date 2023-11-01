import Card1 from "../../component/card1/card1";
import ImgCard1 from '../../assets/images/card1.png'
import ImgCard2 from '../../assets/images/card2.png'
import ImgCard3 from '../../assets/images/card3.png'

function Section1() {
    return (
        <div
            className="mx-5 pt-5 d-flex row justify-content-lg-center justify-content-md-center justify-content-md-around-1 ">
            <div className="card mb-3 mx-lg-0  mx-1 px-5 col-xl-4 col-lg-6 col-md-6 col-sm-12 onHover ">
                <Card1 img={ImgCard1} title="FREE SHIPPING" description="For orders over $50"></Card1>
            </div>
            <div className="card mb-3 mx-lg-0 mx-1 px-5 col-xl-4 col-lg-6 col-md-6 col-sm-12 onHover">
                <Card1 img={ImgCard2} title="OFFICIAL DISCOUNTS" description="Save Big on next product"></Card1>
            </div>
            <div className="card mb-3 mx-lg-0 mx-1 px-5 col-xl-4 col-lg-6 col-md-6 col-sm-12 onHover">
                <Card1 img={ImgCard3} title="24/7 HELPLINE" description="Care till the end"></Card1>
            </div>
        </div>
    );
}
export default Section1;