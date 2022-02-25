import React from 'react';
import {Link as LinkP, withRouter} from "react-router-dom";
import {motion} from "framer-motion";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {createStructuredSelector} from "reselect";
import {selectCurrentPage} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, toggleSearchHidden} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";

const NavBarPhone = ({history , toggleSearchHidden, setCurrentPage, current_page}) => {
    return (
        <div className="nav-phone">
            <input type="checkbox" className="nav-phone__checkbox" id="navi-toggle"/>

                <label htmlFor="navi-toggle" className="nav-phone__button">
                    <span className="nav-phone__icon">&nbsp;</span>

                </label>

            <div className="nav-phone__background">&nbsp;</div>
                <nav className="nav-phone__nav">
                    <ul className="nav-phone__list">
                        <li className="nav-phone__item">
                            <div className={`nav-phone__link ${current_page === '/' ? 'nav-phone__link-active': null}`}>
                                <LinkP to={'/header'} smooth={true} duration={1000}>
                                    <i className="fas fa-home"/> Accueil
                                </LinkP>
                            </div>
                        </li>
                        <li className="nav-phone__item">
                            <div className={`nav-phone__link ${current_page !== '/contact_us' && current_page !== '/' && current_page !== '/events' ?  'nav-phone__link-active': null}`}>
                                <LinkP to={'/categories'} smooth={true} duration={1000}>
                                    <i className="fas fa-id-card"/> produits                                </LinkP>
                            </div>
                        </li>
                        <li className="nav-phone__item">
                            <div className={`nav-phone__link ${current_page === '/events' ? 'nav-phone__link-active': null}`}>
                                <LinkP to={'/events'} smooth={true} duration={1000}>
                                    <i className="fas fa-calendar-day"/> Evénement
                                </LinkP>
                            </div>
                        </li>
                        <li className="nav-phone__item">
                            <div className={`nav-phone__link ${current_page === '/contact_us' ? 'nav-phone__link-active': null}`}>
                                <LinkP to={'/contact_us'} smooth={true} duration={1000}>
                                    <i className="fas fa-envelope-open-text"/> contactez nous
                                </LinkP>
                            </div>
                        </li>
                        <li className="nav-phone__item">
                            <div className={`nav-phone__link ${current_page === '/' ? 'nav-phone__link-active': null}`}>
                                <div
                                    className="search-button search-buttonPhone " onClick={toggleSearchHidden}>
                                    <IcomoonReact iconSet={iconSet} size={20}  icon="magnifying-glass"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    current_page: selectCurrentPage,
});


const mapDispatchToProps = dispatch => ({
    toggleSearchHidden: () => dispatch(toggleSearchHidden()),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarPhone));

