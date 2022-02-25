import Reat from 'react';
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import {Link} from "react-router-dom";
import React from "react";
import GoogleMap from "../Google-map/GoogleMap";
import VisibilitySensor from "react-visibility-sensor";
import {SwiperSlide} from "swiper/swiper-react";
const style = {
    width: '100%',
    height: '100%'
}
const AddressSection = () => {
    return (

        <div className="about-us-section address">

            <p className="title-p before-title">
            </p>

            <h2 className="heading-secondary">
                Adresse sociale</h2>

            {/*<RubberBand>*/}
                <div className="white-divider"/>
            {/*</RubberBand>*/}
            <div className="content">
                <div className="content__text content__input">
                    {/*<Fade right>*/}
                        <p className="paragraph">Bienvenu à AQUA VIM</p>
                    {/*</Fade>*/}

                    <h1 className="title_1 map_title_1 title_1add">
                        {/*<Fade right cascade>*/}
                            Address
                        {/*</Fade>*/}
                    </h1>
                    {/*<RubberBand>*/}
                        <div className="text-div map-div"/>
                    {/*</RubberBand>*/}
                    <p className="paragraph paragraph-2 map-par">
                        <i className="fas fa-map-marked-alt"/>
                        {/*<Fade left cascade>*/}
                        CITÉ CAMPS N° 06 ILOT E LOCAL 02, <br/> DAR EL BEIDA, <br/>ALGER
                        {/*</Fade>*/}
                    </p>




                </div>
                <div className=" content__map">
                    <div className='cls'>
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressSection;