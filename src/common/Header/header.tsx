import styles from "./style.module.css";
const Header = () => {
    return (
        <header className={`${styles.Headeer}`}>
            <div className={`${styles.container}`}>
              <p className={`${styles.Title}`}>Gabriel Blog</p>
            </div>
        </header>
    );
};

export default Header;
