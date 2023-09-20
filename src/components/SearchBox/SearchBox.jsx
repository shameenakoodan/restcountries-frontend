//import './SearchBox.scss'
const SearchBox = (props)=>{
    const {label,searchTerm,handleInput}=props;
    return (
        <form className="search-box" name="form">
          <label>
            Country Search
          </label>
          <input type="text"
            name={label}
            value={searchTerm} 
            onInput={handleInput}
            placeholder="Search By Name"
            />
        </form>
      );
    };
export default SearchBox;