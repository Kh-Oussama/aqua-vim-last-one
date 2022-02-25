import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectServices} from "../../redux/services/services.selectors";

const ServicesSection = ({services}) => {

    return (
        <div className="services-section" id="services">

            <p className="title-p before-title">
                {/*How do we Work*/}
            </p>
            <h2 className="heading-secondary">Domaines d’application</h2>
            <p className="title-p title-description">
                EURL AQUA VIM intervient dans les domaines suivants
            </p>
            <RubberBand>
                <div className="white-divider"/>
            </RubberBand>

            <div className="services-section__container">
                {
                    services.length > 0
                        ? <React.Fragment>
                            {
                                services.map(service => {

                                    return (
                                        <div className="card card__1">
                                            <div className="card__imgBx" data-text={service.name}>
                                                <img src={`https://www.admin.aqua-vim.com/${service.image_path}`} alt=""/>
                                                <div className="white-divider"/>
                                            </div>
                                            <div className="card__content">
                                                <div>
                                                    <div className="card__content-h3">{service.name}</div>
                                                    <div className="card__content-p" id="service-1">
                                                       {service.description}
                                                    </div>
                                                    {/*<a href="#" className="card__content-a">Read More</a>*/}
                                                </div>
                                            </div>
                                        </div>                                           )
                                })
                            }
                        </React.Fragment>
                        : null
                }


            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    services: selectServices,
});



export default connect(mapStateToProps, null)(ServicesSection);

