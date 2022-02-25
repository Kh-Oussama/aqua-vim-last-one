import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkP} from 'react-scroll';
import Fade from "react-reveal/Fade";
import {createStructuredSelector} from "reselect";
import {selectCurrentConfig} from "../../redux/config/config.selectors";
import {connect} from "react-redux";
import {motion} from "framer-motion";


const Footer = ({currentConfig}) => {
    return (
        <footer className="footer">
            <div className="footer--content">
                <div className="footer--content-left">
                    <span><i className="fas fa-phone-square"/>mobile : {currentConfig.phone_number_2 ? '+213 '+currentConfig.phone_number_2 :null}</span>
                    <span><i className="fas fa-phone-square"/>mobile : {currentConfig.phone_number_3 ? '+213 '+currentConfig.phone_number_3 :null}</span>
                    <span><i className="fas fa-envelope"/>Email : <br/> {currentConfig.email}</span>
                </div>
                {/*<Fade bottom>*/}
                    <ul className="nav">
                        <li className="nav__item"><Link to="/" className="nav__link">Accueil</Link></li>
                        <li className="nav__item"><Link to="services" className="nav__link">Nos Services</Link></li>
                        <li className="nav__item"><Link to="/events" className="nav__link">Évènements</Link></li>
                        <li className="nav__item"><Link to="/contact_us" className="nav__link">Contact</Link></li>

                   </ul>
                {/*</Fade>*/}
                <div className="footer--content-right">
                    <span><i className="fas fa-map-marked-alt"></i>Adresse : Cité Camps N 06 ilot E local 002, Dar el Beida, Alger</span>
                    <span><i className="fas fa-map-marked-alt"></i>Adresse : Cité Camps N 06 ilot E local 002, Dar el Beida, Alger</span>
                    <span><i className="fas fa-fax"/>Fax : {currentConfig.phone_number_4 ? '+213 '+currentConfig.phone_number_4 :null}</span>
                </div>
            </div>
            <div className="footer__social-media">
                <Link
                    to={{ pathname: "https://web.facebook.com/eurl.aquavim/" }}
                    target="_blank">
                <i className="fab fa-facebook-square"/>
                </Link>
                <Link
                    to={{ pathname: "https://www.instagram.com/aqua_vim1/?fbclid=IwAR0wDSR4dpylh7nck3cvQn0gcS3fSL6WEUKVsas-dwT5wLbBEP4FFP1pAzg" }}
                    target="_blank">
                <i className="fab fa-instagram-square"/>
                     </Link>
                <Link
                    to={{ pathname: "https://www.linkedin.com/in/aqua-vim-1976ab208?fbclid=IwAR1XRspkWB3GZ-z_FvotjXCg8Z6Zo9fIirVBjH6XCkBXqKtXfloxcdrIDgI" }}
                    target="_blank">
                    <i className="fab fa-linkedin"/>
                </Link>
            </div>
            <p className="copyright">
                <Fade left cascade>
                &copy; Copyright 2021 by Khirat Oussama.
                </Fade>
            </p>
        </footer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentConfig: selectCurrentConfig,
});


export default connect(mapStateToProps, null)(Footer);
