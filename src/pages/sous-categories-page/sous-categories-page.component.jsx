import React, {useEffect} from 'react'
import NavigationBar from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import SousCategories from "../../components/sous-categories/sous-categories.component";
import {useLocation, withRouter} from "react-router-dom";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";

const SousCategoriesPage = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="categories-page">
            <NavigationBar/>
            <SousCategories/>
            <SubscribeUs/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(null, mapDispatchToProps)(withRouter(SousCategoriesPage));

