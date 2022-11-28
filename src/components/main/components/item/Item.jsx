import styles from "./Item.module.css";

const Item = ({ imageUrl, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <figure>
          <img src={imageUrl} />
        </figure>
        <div className={styles.itemName}>
          <h3>{title}</h3>
        </div>
      </div>
      <button type="button" className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
