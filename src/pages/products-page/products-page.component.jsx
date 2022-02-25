import React, {useEffect} from 'react'
import NavigationBar from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import Products from "../../components/products/products.component";
import {useLocation, withRouter} from "react-router-dom";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import Helmet from "react-helmet";

const ProductsPage = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
        <div className="categories-page">
            <NavigationBar/>
            <Products/>
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

export default connect(null, mapDispatchToProps)(withRouter(ProductsPage));

