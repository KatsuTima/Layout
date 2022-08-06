import headerImg from "../../assets/meals.jpeg";
import classes from "./Header/Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Anime Food</h1>
        <button>Click Me</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="food" />
      </div>
    </>
  );
};
