import React, {useEffect} from 'react'
import NavigationBar from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import Categories from "../../components/categories/categories.component";
import {useLocation, withRouter} from "react-router-dom";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import Helmet from "react-helmet";

const CategoriesPage = ({setCurrentPage}) => {
    const {pathname} = useLocation();

    useEffect(() => {
            setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Helmet>
                <title>Entreprise implantée à alger spécialisée dans la vente, l'installation et la maintenance des système de pompage.</title>
            </Helmet>
        <div className="categories-page">
            <NavigationBar/>
            <Categories/>
            <Gallery/>
            <Footer/>
        </div>
            </>
    )
}


const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(null, mapDispatchToProps)(withRouter(CategoriesPage));


