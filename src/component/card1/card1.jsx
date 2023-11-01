import './card1.css';

function Card1(props) {
    return (
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={props.img}
                         loading="lazy"
                         className="support-block-card__image w80px mr-auto w540 pt-2"
                         alt=""/></div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title hov fw-bolder text-center">{props.title}</h5>
                        <p className="card-text"><small>{props.description}</small></p>
                    </div>
                </div>
            </div>
    );
}

export default Card1;


