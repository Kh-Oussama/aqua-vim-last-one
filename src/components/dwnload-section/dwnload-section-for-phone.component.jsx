import React, {useEffect, useState} from 'react';

import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import Particles from "react-particles-js";
import {createStructuredSelector} from "reselect";
import {selectCurrentConfig} from "../../redux/config/config.selectors";
import {connect} from "react-redux";


const Dwnload = ({currentConfig}) => {
    return (
        <section className="partners-section download-section">
                <div className="download-layer">
                <Particles width= {"100%"} height={"100%"}
                           params={{
                               "particles": {
                                   "number": {
                                       "value": 250,
                                       "density": {
                                           "enable": true,
                                           "value_area": 800
                                       }
                                   },
                                   "style":{
                                       "width": '100%',
                                   },
                                   "color": {
                                       "value": "#fff"
                                   },
                                   "line_linked": {
                                       "enable": true,
                                       "opacity": 0.07,
                                       "color": {
                                           "value": "#fff"
                                       },
                                   },
                                   "move": {
                                       "speed": 1
                                   },
                                   "size": {
                                       "value": 1
                                   },
                                   "opacity": {
                                       "anim": {
                                           "enable": true,
                                           "speed": 1,
                                           "opacity_min": 0.05
                                       }
                                   }
                               },
                               "interactivity": {
                                   "events": {
                                       "onclick": {
                                           "enable": true,
                                           "mode": "push"
                                       }
                                   },
                                   "modes": {
                                       "push": {
                                           "particles_nb": 1
                                       }
                                   }
                               },
                               "retina_detect": true
                           }} />
                </div>

            <div className="partners-section-header download-title">
                <h1 className="title_2 title_2_download">offre de service</h1>
                <h1 className="title_1 title_1_download">
                    {/*<Fade left cascade>*/}
                    AQUA VIM vous offre un service complet <br/> de vos système de pompage                    {/*</Fade>*/}
                </h1>
                <p className="paragraph paragraph_download">
                    {/*<Fade left cascade>*/}
                    {/*we are committed to providing our customers with exceptional*/}
                    {/*service <br/> while offering out employees the best training*/}
                    {/*/!*</Fade>*!/*/}
                    </p>
            </div>
            <div className="content__text--btn content__text--btn-download">
                <Link  target="_blank"
                       to={{ pathname: `https://admin.aqua-vim.com/${currentConfig.pdf_path}` }}
                >
                    <i className="fas fa-download"/> Download
                </Link>
            </div>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    currentConfig: selectCurrentConfig,
});


export default connect(mapStateToProps, null)(Dwnload);
