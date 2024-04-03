import css from "../PhoneBook.module.css";

const SearchBox = ({ searchData, setSearchData }) => {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
      </label>
    </div>
  );
};

export default SearchBox;
