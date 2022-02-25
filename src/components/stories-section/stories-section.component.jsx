import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import Fade from "react-reveal/Fade";
import ModalVideo from "react-modal-video";
import RubberBand from "react-reveal/RubberBand";

const StoriesSection = () => {
    const [isOpen, setOpen] = useState(false)
    return (

        <>
        <section className="section-stories" id={"stories"}>
            <div className="layer">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop poster="/images/v.jpg">
                    <source src="/images/v.mp4" type="video/mp4"/>
                    <source src="/images/v.webm" type="video/webm"/>
                    {/*Your browser is not supported!*/}
                </video>
            </div>

                <div className="section-header section-header-stories">
                    <Fade left>

                        {/*<h2 className="title stories-title">*/}
                        {/*    Présentation*/}
                        {/*</h2>*/}
                    </Fade>
                    {/*<div className="red-divider red-divider-stories"/>*/}
                </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="MJ77xOcctm0" onClose={() => setOpen(false)} />
            <div className="video-button" onClick={()=> setOpen(true)}>
                <i className="fas fa-play"></i>
            </div>
            </div>
        </section>
            </>


    )
}



export default withRouter(StoriesSection);
