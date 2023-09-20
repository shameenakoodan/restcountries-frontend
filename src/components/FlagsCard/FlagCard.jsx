import "./FlagCard.scss";
const FlagCard=(props)=>{
    
    return(
        <div className="flag-card">
                <img src={props.flags} alt="Country Flag"  className="flag-size"/>
                <p>{props.name.common}</p>
                <br />
                Population : {props.population}
                <br />
                Capital : {props.capital}
                <br />
                Region : {props.region}
                <br />
                
        </div>
    )
}
export default FlagCard;