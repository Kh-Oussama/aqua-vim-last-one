import React, {useEffect} from 'react'
import NavigationBar from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import Events from "../../components/events/events-Overview.compoenent";
import {Link, useLocation, withRouter} from "react-router-dom";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import {createStructuredSelector} from "reselect";
import {selectSearchHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";
import Search from "../../components/serach/search.component";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import Helmet from "react-helmet";

const EventsPage = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Helmet>
                <title>Aqua Vim - Nos événements</title>
            </Helmet>
        <div className="categories-page">
            <NavigationBar/>
            <div className="shop-header">
                <div className="shop-header__top">
                    <div className="shop-header__top-block">
                        <Link to='/'>
                            <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                            className="linkText">Home</span>
                        </Link>
                        <Link to='/events'>
                            <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> Evénement</span>
                        </Link>
                    </div>
                </div>
                <div className="shop-header__content">
                    <h1 className="title_1">
                        Nos évènements
                    </h1>
                    <p className="paragraph">
                        Depuis 2016, EURL AQUA VIM a eu l’opportunité d’exposer ses produits et de présenter ses
                        services au public dans les plus grands salons. Parmi ces expositions nous citons :  </p>
                </div>
                {/*<div className="shop-header__bottom">*/}
                {/*    <div className="shop-header__bottom-pCount">*/}
                {/*        <i className="fas fa-tags"/> 05 categories*/}
                {/*    </div>*/}
                {/*    <div className="shop-header__bottom-sortBy">*/}
                {/*        <form action="#" className="form">*/}
                {/*            <input type="text" className="form__input" placeholder="Rechercher ici ...."/>*/}
                {/*            <button className="form__button">*/}
                {/*                Search*/}
                {/*            </button>*/}
                {/*        </form>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
            <Events/>
            {/*<div className="shop-header__bottom" style={{justifyContent: 'flex-end'}}>*/}
            {/*    <div className="shop-header__bottom-pages" style={{display: 'block', flex: '0 0 25%'}}>*/}
            {/*        <span className="text">Page</span>*/}
            {/*        <span className="number number-active">01</span>*/}
            {/*        <span className="number">02</span>*/}
            {/*        <span className="number">03</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <SubscribeUs/>
            <Gallery/>
            <Footer/>
        </div>
        </>
    )
}




const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(null, mapDispatchToProps)(withRouter(EventsPage));



