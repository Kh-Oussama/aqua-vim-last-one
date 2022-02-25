import React, {useEffect} from 'react';
import ViewProduct from "../../components/view-product/view-product.component";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation/navigation.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import {useLocation, withRouter} from "react-router-dom";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";

const ViewProductPage = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="view-product-page">
            <NavigationBar/>
            <ViewProduct/>
            <SubscribeUs/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(null, mapDispatchToProps)(withRouter(ViewProductPage));

