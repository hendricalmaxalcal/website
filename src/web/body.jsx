import styles from "./web.module.css";

import itImage from "../assets/Laptop/Hp/450 g2.jpg";
import laptopImage from "../assets/Laptop/dell/3180.jpeg";
import accessoriesImage from "../assets/Laptop/others/nec g3.jpeg";
import phoneImage from "../assets/Phone/Samsung/s10 plus.jpg";
import routerImage from "../assets/Phone/Samsung/s26 ultra.jpeg";

function Body() {
    return (
        <main className={styles.body}>

            {/* Introduction */}
            <section className={styles.intro}>
                <div className={styles.introText}>
                    <h1>Welcome to NetIrish</h1>

                    <p>
                        We provide professional IT solutions,
                        cybersecurity services, networking solutions,
                        web development, and quality technology products
                        for businesses and individuals.
                    </p>

                    <button>Learn More</button>
                </div>

                <div className={styles.introImage}>
                    <img src={itImage} alt="IT Solutions" />
                </div>
            </section>

            {/* Services */}
            <section className={styles.services}>
                <h2>Our Services</h2>

                <div className={styles.cardGrid}>

                    <div className={styles.card}>
                        <h3>Web Development</h3>
                        <p>
                            Professional websites and web applications.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Cyber Security</h3>
                        <p>
                            Protecting your systems and digital assets.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Networking</h3>
                        <p>
                            Installation and maintenance of networks.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>IT Consulting</h3>
                        <p>
                            Expert technology guidance and support.
                        </p>
                    </div>

                </div>
            </section>

            {/* Products */}
            <section className={styles.products}>
                <h2>Our Products</h2>

                <div className={styles.cardGrid}>

                    <div className={styles.productCard}>
                        <img src={laptopImage} alt="Laptop" />
                        <h3>Computers & Laptops</h3>
                    </div>

                    <div className={styles.productCard}>
                        <img src={accessoriesImage} alt="Accessories" />
                        <h3>Computer Accessories</h3>
                    </div>

                    <div className={styles.productCard}>
                        <img src={phoneImage} alt="Phone" />
                        <h3>Phones</h3>
                    </div>

                    <div className={styles.productCard}>
                        <img src={routerImage} alt="Router" />
                        <h3>Internet Routers</h3>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Body;