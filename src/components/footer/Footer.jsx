import logowhite from "../../assets/logo-white.png";
import "./footer.scss";


function Footer() {
    return (
<footer className="footer">
        <div className="footer__container">
            <div className="footer__logo-container">
            <img src={logowhite} alt="Logo Kasa blanc" className="footer__logo"/>
            </div>
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </div>
</footer>

)
}
export default Footer