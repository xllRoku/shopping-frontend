import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <h1 className={styles.hd1}>
        <span className={styles.spanColor}>Shoppingify</span> allows you take
        your <br />
        shopping list wherever you go
      </h1>
      <nav>
        <div className={styles.inputWrapper}>
          <input
            type="search"
            className={styles.input}
            placeholder="Search item"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            height="30px"
            width="30px"
            className={styles.inputIcon}
          />
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
