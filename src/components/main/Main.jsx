import styles from "./Main.module.css";
import { BERAGES, FRUITS, MEAT_AND_FISTH } from "../../constans/items";
import SearchBar from "./components/searchBar/SearchBar";
import Category from "./components/category/Category";

const Main = () => {
  return (
    <main className={styles.pdSides}>
      <SearchBar />
      <Category category={FRUITS} />
      <Category category={BERAGES} />
      <Category category={MEAT_AND_FISTH} />
    </main>
  );
};

export default Main;
