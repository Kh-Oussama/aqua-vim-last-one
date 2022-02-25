import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Fade from 'react-reveal/Fade';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import RubberBand from "react-reveal/RubberBand";
import VisibilitySensor from "react-visibility-sensor";
import {selectToTopButtonState} from "../../redux/design-utilites/design-utilities.selectors";
import {setToTopButton} from "../../redux/design-utilites/design-utilities.actions";


const AddressSection = ({to_top_button_hidden,set_to_top_button}) => {

    return (

        <div className="address-section" id="address">
            <VisibilitySensor
                active={!(to_top_button_hidden === "address")}
                onChange={isVisible => {
                    if (isVisible) {
                        set_to_top_button(true);
                    }
                }}
                delayedCall>
            <h2 className="heading-secondary">
                Adresse sociale</h2>
            </VisibilitySensor>

            <RubberBand>
                <div className="white-divider"/>
            </RubberBand>
            <Fade bottom big>
                <div className="map-block">
                    <div className="map-add">
                        <p className="paragraph paragraph-2 map-par">
                            <i className="fas fa-map-marked-alt"/>
                            {/*<Fade left cascade>*/}
                            AquaVIM, 6 Rte Hai Mouhous, <br/>  Bordj El Kiffan, <br/>ALGER
                            {/*</Fade>*/}
                        </p>
                        <div className="leaflet-container">

                            <MapContainer center={[36.740137165501444, 3.1981354982931562]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[36.740137165501444, 3.1981354982931562]}>
                                    <Popup>
                                        <div className="markerBlock">
                                            <img src="/images/logo.PNG" alt="image" className="marker-image"/>
                                            <p>AquaVIM, 6 Rte Hai Mouhous, Bordj El Kiffan</p>
                                        </div>

                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                    <div className="map-add">
                        <p className="paragraph paragraph-2 map-par">
                            <i className="fas fa-map-marked-alt"/>
                            {/*<Fade left cascade>*/}
                            CITÉ CAMPS N° 06 ILOT E LOCAL 02, <br/> DAR EL BEIDA, <br/>ALGER
                            {/*</Fade>*/}
                        </p>
                        <div className="leaflet-container">

                            <MapContainer center={[36.715909643981675, 3.2388689213502713]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[36.715909643981675, 3.2388689213502713]}>
                                    <Popup>
                                        <div className="markerBlock">
                                            <img src="/images/logo.PNG" alt="image" className="marker-image"/>
                                            <p>CITÉ CAMPS N° 06 ILOT E LOCAL 02,
                                                DAR EL BEIDA,ALGER</p>
                                        </div>

                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>


                </div>
            </Fade>


        </div>

    )
}
const mapStateToProps = createStructuredSelector({
    to_top_button_hidden: selectToTopButtonState,

});

const mapDispatchToProps = dispatch => ({
    set_to_top_button: current_state => dispatch(setToTopButton(current_state)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddressSection));
