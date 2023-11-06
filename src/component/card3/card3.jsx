import './card3.css';

function card3(props) {
    if (props.direction === 'left') {
        return (
            <div className="row g-0 pb-5">
                <div className="col-lg-8 col-md-8 col-sm-12 order-md-1 order-lg-1 order-2">
                    <div className="card-body text-end">
                        <h5 className="card-title colorOnHover text-center text-md-end colorBlue">{props.title}</h5>
                        <p className="card-text text-center text-md-end"><small className=" text-center">{props.paragraph}</small></p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 order-md-2 order-lg-2 order-1 d-flex">
                    <img src={props.image}
                         alt=""
                         width="1420" height="1650" loading="lazy"
                         sizes="(min-width: 990px) 760px, (min-width: 750px) 710px, calc(100vw - 30px)"
                         className="block-icon__image ima m-auto"/>
                </div>
            </div>);
    } else {
        return (
            <div className="row g-0 pb-5">
                <div className="col-md-2 d-flex">
                    <img src={props.image}
                         alt=""
                         width="1420" height="1650" loading="lazy"
                         sizes="(min-width: 990px) 760px, (min-width: 750px) 710px, calc(100vw - 30px)"
                         className="block-icon__image m-auto ima"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title colorOnHover text-md-start text-center colorBlue">{props.title}</h5>
                        <p className="card-text text-md-start"><small className="text-muted text-center">{props.paragraph}</small></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default card3;