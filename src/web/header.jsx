import styles from "./web.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                NetIrish
            </div>

            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#Products">Products</a>
                <a href="#about">About Us</a>
            </nav>
            <div className={styles.actions}>
            </div>

            <div className={styles.actions}>
                <button>Costumer Care</button>
                <button>Get Started</button>    
            </div>
        </header>
    );
}

export default Header;