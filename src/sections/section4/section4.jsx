import LightButton from "../../kit/lightButton/lightButton";
import './section4.css';
import Headers from "../../component/headers/headers";
function Section2() {
    return (
        <section className="mt-6">
            <div className="section-4">
                <div className="txt1-hero pt-5 pb-5">
                    <p className="card-text text-center pt-3 pb-5 letterSpac">JENNIFER F., CASPER CUSTOMER</p>
                    <h1 className="text-center pb-5">"Unbeatable price, and it’s super comfortable"</h1>
{/*{
                    <Headers first="JENNIFER F., CASPER CUSTOMER" second="FASTER PROCESSING WITH LESS POWER"/>
}*/}
                    <LightButton className1="bgWhiteBtn"></LightButton>
                </div>
            </div>
        </section>
    );
}
export default Section2;