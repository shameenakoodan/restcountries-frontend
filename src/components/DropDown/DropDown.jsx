const DropDown = (props) => {
    const {label,searchTerm,handleInput}=props;

    return (
        <div>
            <div class="dropdown">
                <select name={label}
                value={searchTerm} 
                onInput={handleInput}
                >
                    <option value="" disabled selected>Select an option</option>
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