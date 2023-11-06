import './headers.css';

function Headers(props){
return(

    <div className="mx-5 pt-5 d-flex flex-column pb-5">
        <h1 className= {`text-center pt-2 ${props.className1}`}> {props.first}</h1>
        <p className={`card-text text-center pt-3 letterSpac ${props.className2}`}><small className={`${props.className3}`}> {props.second}</small></p>
</div>
);}

export default Headers;
