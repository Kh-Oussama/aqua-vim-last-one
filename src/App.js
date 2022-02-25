import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/home-page/home-page.component";
import CategoriesPage from "./pages/categories-page/categories-page.component";
import SousCategoriesPage from "./pages/sous-categories-page/sous-categories-page.component";
import ProductsPage from "./pages/products-page/products-page.component";
import ViewProduct from "./components/view-product/view-product.component";
import ViewProductPage from "./pages/view-product-page/view-product-page.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";
import Search from "./components/serach/search.component";
import {createStructuredSelector} from "reselect";
import {selectSearchHidden} from "./redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";
import EventsPage from "./pages/events-page/events-page.component";
import {fetchSlidersStart} from "./redux/slliders/slider.actions";
import {fetchReferencesStart} from "./redux/references/reference.actions";
import {fetchServicesStart} from "./redux/services/services.actions";
import {setCurrentPage} from "./redux/design-utilites/design-utilities.actions";
import {getConfigStart} from "./redux/config/config.actions";
import {selectUpdateLoading} from "./redux/config/config.selectors";
import Loader from "./components/loader/loader.compoenent";

function App({search_hidden,getConfigStart,updateLoading}) {

    useEffect(() => {
        getConfigStart();
    }, [getConfigStart]);

    return (
        <React.Fragment>
            {
                search_hidden
                    ? null
                    : <Search/>
            }
            {
                updateLoading
                    ? <Loader/>
                    : <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/categories" component={CategoriesPage}/>
                        <Route exact path="/categories/sous_Categories/:id" component={SousCategoriesPage}/>
                        <Route exact path="/categories/sous_Categories/products/:id" component={ProductsPage}/>
                        <Route exact path="/categories/sous_Categories/products/view_product/:id" component={ViewProductPage}/>
                        <Route exact path="/contact_us" component={ContactUsPage}/>
                        <Route exact path="/events" component={EventsPage}/>
                        <Redirect to="/"/>
                    </Switch>
            }

        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    search_hidden: selectSearchHidden,
    updateLoading : selectUpdateLoading,
});

const mapDispatchToProps = dispatch => ({
    getConfigStart : () => dispatch(getConfigStart()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);


