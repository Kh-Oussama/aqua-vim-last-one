import React, {useEffect} from 'react';

import ServicesSection from "../../components/services-section/services-section.component";
import AboutUsSection from "../../components/about-us-section/about-us-section.compoenent";
import VideoSection from "../../components/video-section/video-section.component";
import CounterSection from "../../components/counter-section/counter-section.component";
import SubscribeUs from "../../components/subscribe-us-section/subscribe-us-section.component";
import Partners from "../../components/partners-section/partners-section-for-phone.component";
import Gallery from "../../components/gallery/gallery.compoenent";
import Footer from "../../components/footer/footer.component";
import ReferencesSection from "../../components/references-section/references-section.component";
import NavigationBar from "../../components/navigation/navigation.component";
import {useLocation} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectIsFetching} from "../../redux/slliders/slider.selectors";
import {fetchSlidersStart} from "../../redux/slliders/slider.actions";
import {connect} from "react-redux";
import {selectIsFetchingRef} from "../../redux/references/reference.selectors";
import {fetchReferencesStart} from "../../redux/references/reference.actions";
import Loader from "../../components/loader/loader.compoenent";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import Dwnload from "../../components/dwnload-section/dwnload-section-for-phone.component";
import Header from "../../components/header2/header.component";
import AddressSection from "../../components/address-section-leaflet/address-section.component";
import Particles from "react-particles-js";
import StoriesSection from "../../components/stories-section/stories-section.component";
import {fetchServicesStart} from "../../redux/services/services.actions";
import {getConfigStart} from "../../redux/config/config.actions";
import {selectUpdateLoading} from "../../redux/config/config.selectors";
import {selectIsFetchingServices} from "../../redux/services/services.selectors";
import Helmet from "react-helmet";

const HomePage = ({isFetchingSlides,isFetching,updateLoading, fetchServices,getConfigStart, setCurrentPage, fetchSlidersStart, isFetchingRef, fetchReferences}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    useEffect(() => {
        fetchSlidersStart();
    }, [fetchSlidersStart]);



    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    useEffect(() => {
        fetchReferences();
    }, [fetchReferences]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <React.Fragment>
            <Helmet>
                <title>Aqua Vim</title>
            </Helmet>
            {
                isFetchingSlides || isFetching || isFetchingRef || updateLoading
                    ? <Loader/>
                    : <div className="home">
                        <NavigationBar/>
                        <Header/>
                        <AddressSection/>
                        <AboutUsSection/>
                        {/*<VideoSection/>*/}
                        <StoriesSection/>
                        <ServicesSection/>
                        <CounterSection/>
                        <SubscribeUs/>
                        <Dwnload/>

                        <Partners/>
                        <ReferencesSection/>
                        <Gallery/>
                        <Footer/>
                    </div>
            }


        </React.Fragment>
    )
}


const mapStateToProps = createStructuredSelector({
    isFetchingSlides: selectIsFetching,
    isFetchingRef: selectIsFetchingRef,
    updateLoading : selectUpdateLoading,
    isFetching: selectIsFetchingServices,
});


const mapDispatchToProps = dispatch => ({
    fetchSlidersStart: () => dispatch(fetchSlidersStart()),
    fetchReferences: () => dispatch(fetchReferencesStart()),
    fetchServices: () => dispatch(fetchServicesStart()),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),

});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



