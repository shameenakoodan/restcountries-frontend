import "./DropDown.scss";
const DropDown = (props) => {
    const {label,searchTerm,handleInput}=props;

    return (
        <div>
            <div className="dropdown">
                <select name={label}
                defaultValue={searchTerm} 
                onInput={handleInput}
                 className="selection-list">
                    <option value="Filter By Regio">Filter By Region</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>

                </select>
            </div>
        </div>
    )
}
export default DropDown;