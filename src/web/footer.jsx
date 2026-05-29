

import { MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            <hr />
                <div className="footer-center">
                    <p>
                        <MdPhone /> +255 685 635 835
                    </p>
                    <p>
                        <MdEmail /> info@netirish.com
                    </p>
                </div>

                <div className="footer-right">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>

                <div className="footer-left">
                    <h3>NetIrish</h3>
                    <p>Reliable IT Solutions & Services</p>
                </div>
            </div>


            <p className="copyright">
                © {new Date().getFullYear()} NetIrish. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;