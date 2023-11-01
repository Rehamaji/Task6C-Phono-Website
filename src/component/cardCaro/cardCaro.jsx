import './cardCaro.css';
import Iphone14Card from '../../assets/images/iphone14Card.png';
import StarRating from "../starRating/starRating";
function CardCaro(props) {

    return (
    <div className="disableHov px-4 my-3">
        <div className={`card align-items-center pt-3 w-100  cardHover ${props.className1}`} >
            <img src={props.image} alt=" "
                 loading="lazy"
                 className=" mr-auto w-50 h90"/>
            <button className="buttonHover bghov">Add To Card</button>
            <div className="card-body bg-light-gray w-100">
                <h5 className="card-title color-black px-2 py-2 fw-800 text-center"> {props.title} </h5>
                <StarRating rating={props.rating}/>
                <p className="card-text px-2 py-2 fs14 text-center"> {props.before} $
                    <del className="text-muted text-center"> <small>87674</small></del> </p>
            </div>
       </div>
    </div>
);
}
export default CardCaro;
