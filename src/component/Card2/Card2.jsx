import './Card2.css';

function Card2(props) {
    return (
        <div className={`row w-100 ${props.className}`}>
            <div className={`card  align-items-center pt-3 w-100 colorBorder cardHover ${props.className1}`} >
                <img src={props.img} alt=" "
                     loading="lazy"
                     className="support-block-card__image mr-auto w-md-50 w-sm-30 iconHover"/>
                    <div className="card-body">
                        <h5 className="card-title  colorBlue text-center">{props.title1}</h5>
                        <h3 className="card-title  colorBlue text-center">{props.title2}</h3>
                        <p  className="card-text   colorBlue text-center"><small>{props.paragraph}</small></p>
                    </div>
            </div>
        </div>
    );
}

export default Card2;
