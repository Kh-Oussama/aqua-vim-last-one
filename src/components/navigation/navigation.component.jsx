import React, {useEffect, useState} from 'react';
import iconSet from "../../selection.json";
import IcomoonReact, {iconList} from "icomoon-react";
import {Link} from 'react-scroll';
import { motion } from "framer-motion";
import {Link as LinkP, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import {selectCurrentPage} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, toggleSearchHidden} from "../../redux/design-utilites/design-utilities.actions";
import NavBarPhone from "../phone-navigation-bar/phone-navigation-bar.component";
import {selectCurrentConfig} from "../../redux/config/config.selectors";


const NavigationBar = ({history , currentConfig,toggleSearchHidden, setCurrentPage, current_page}) => {
    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShow(document.body.getBoundingClientRect().top > scrollPos || document.body.getBoundingClientRect().top === 0)

    }
    useState(() => {
        setShow(true);
    })
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const unlisten = history.listen(() => {
                    setCurrentPage(window.location.pathname)
            })
        return () => {
            unlisten();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);



    return (
        <div className={`navigation ${show ? 'nav-active': 'nav-hidden'}`} id="navigation">
            <LinkP to={'/'}>
            <div className="navigation__left">
                <img src="/images/logo.PNG" alt="Logo"/>
            </div>
        </LinkP>

            <div className="navigation__center">
                <LinkP to={'/header'} smooth={true} duration={1000}>
                    <motion.div
                        // whileHover={{ scale: 1.2, originX:0}}
                        transition={{ type: 'spring', stiffness: 500}}
                        whileTap={{ scale: 0.9 }}
                        className={`link__block ${current_page === '/' ? 'active': null}`}  >
                        <i className="fas fa-home"/> Accueil
                    </motion.div>
                </LinkP>
                <Link to={'services'} smooth={true} duration={1000}>

                    <motion.div
                        // whileHover={{ scale: 1.2, originX:0}}
                        transition={{ type: 'spring', stiffness: 500}}
                        whileTap={{ scale: 0.9 }}
                        className="link__block">
                        <IcomoonReact iconSet={iconSet} size={20} icon="layers"/> Nos services
                    </motion.div>
                </Link>
                <LinkP to={'/categories'} smooth={true} duration={1000}>
                    <motion.div
                        // whileHover={{ scale: 1.2, originX:0}}
                        transition={{ type: 'spring', stiffness: 500}}
                        whileTap={{ scale: 0.9 }}
                        className={`link__block ${current_page !== '/contact_us' && current_page !== '/' && current_page !== '/events' ? 'active': null}`}  >
                        <i className="fas fa-id-card"/> produits
                        {/*documentation*/}
                    </motion.div>
                </LinkP>
                <LinkP to={'/events'} smooth={true} duration={1000}>
                    <motion.div
                        // whileHover={{ scale: 1.2, originX:0}}
                        transition={{ type: 'spring', stiffness: 500}}
                        whileTap={{ scale: 0.9 }}
                        className={`link__block ${current_page === '/events' ? 'active': null}`}  >
                        <i className="fas fa-calendar-day"/> Evénement
                    </motion.div>
                </LinkP>
                <LinkP to={'/contact_us'} smooth={true} duration={1000}>
                    <motion.div
                        // whileHover={{ scale: 1.2, originX:0}}
                        transition={{ type: 'spring', stiffness: 500}}
                        whileTap={{ scale: 0.9 }}
                        className={`link__block ${current_page === '/contact_us' ? 'active': null}`}  >
                        <i className="fas fa-envelope-open-text"/> Contact
                    </motion.div>
                </LinkP>
                <motion.div
                    whileHover={{ scale: 1.2, originX:0}}
                    transition={{ type: 'spring', stiffness: 500}}
                    whileTap={{ scale: 0.9 }}
                    className="search-button" onClick={toggleSearchHidden}>
                    <IcomoonReact iconSet={iconSet} size={20}  icon="magnifying-glass"/>
                </motion.div>

            </div>
            <div className="navigation__right">

                <IcomoonReact iconSet={iconSet} size={55} icon="chat"/>
                <div className="text-block">
                    <span className="text-block__1">appellez-nous</span>
                    <span className="text-block__2">{currentConfig.phone_number_1 ? '+213 '+currentConfig.phone_number_1 :null}</span>
                </div>
            </div>
            <div className="navigation__right-phone">
                <NavBarPhone/>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    current_page: selectCurrentPage,
    currentConfig: selectCurrentConfig,
});


const mapDispatchToProps = dispatch => ({
    toggleSearchHidden: () => dispatch(toggleSearchHidden()),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));

