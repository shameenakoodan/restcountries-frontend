import "./DropDown.scss";
const DropDown = (props) => {
    const {label,searchTerm,handleInput}=props;

    return (
        <div>
            <div class="dropdown">
                <select name={label}
                value={searchTerm} 
                onInput={handleInput}
                 className="selection-list">
                    <option value="" disabled selected>Filter By Region</option>
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