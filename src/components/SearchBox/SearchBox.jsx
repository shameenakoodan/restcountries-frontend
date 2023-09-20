import "./SearchBox.scss";
const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;
  return (
    <form className="search-box" name="form">
      <div className="search-container">
        <span className="search-icon">&#128269;</span>
        <input
          type="text"
          name={label}
          value={searchTerm}
          onInput={handleInput}
          placeholder="Search By Name"
        />
      </div>
    </form>
  );
};
export default SearchBox;
