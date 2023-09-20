import "./FlagCard.scss";
const FlagCard = (props) => {

    return (
        <div className="flag-card">
            <img src={props.flags} alt="Country Flag" className="flag-size" />
            <div className="flag-details">
                <p>{props.name.common}</p>
                <br />
                <span style={{ fontWeight: 'bold' }}>Population : </span>{props.population}
                <br />
                <span style={{ fontWeight: 'bold' }}>Capital : </span>{props.capital}
                <br />
                <span style={{ fontWeight: 'bold' }}>Region : </span>{props.region}
                <br />
            </div>


        </div>
    )
}
export default FlagCard;