import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade ,EffectCoverflow, EffectCube, EffectFlip, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectSliders} from "../../redux/slliders/slider.selectors";
import {Link as LinkScroll} from 'react-scroll';
import Particles from "react-particles-js";
import {motion} from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import {setToTopButton} from "../../redux/design-utilites/design-utilities.actions";
import {selectToTopButtonState} from "../../redux/design-utilites/design-utilities.selectors";
// import LazyLoad from 'react-lazyload';

SwiperCore.use([Navigation, Pagination, EffectCube,EffectFade, Autoplay]);
const Header = ({sliders,to_top_button_hidden,set_to_top_button}) => {
        const [toTopButton,setToTopButton] = useState(true);
    return (

        <header className="header-container-v2" id='header'>
            <LinkScroll to={'header'} smooth={true} duration={1000}>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        transition: {
                            delay: 20,
                            duration: .5,


                        }
                    }}
                    drag
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                    style={{display: to_top_button_hidden ? '' : 'none'}}
                    className="footer-btn">
                    <i className="fas fa-angle-double-up"/>
                </motion.div>
            </LinkScroll>

            <Swiper
                slidesPerView={1}
                navigation={false}
                speed={1000}
                zoom={100}
                // loop
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false
                }}
                effect="cube"
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => {

                }}

            >
                <SwiperSlide>

                    <div className="header__item-v2" style={{
                        backgroundImage: `url(https://www.admin.aqua-vim.com/${sliders[0].image_path}` ,
                    }}>

                        <div className="layer">
                            <Particles height={"100vh"}
                                       params={{
                                           "particles": {
                                               "number": {
                                                   "value": 300,
                                                   "density": {
                                                       "enable": false
                                                   }
                                               },
                                               "size": {
                                                   "value": 3,
                                                   "random": true,
                                                   "anim": {
                                                       "speed": 4,
                                                       "size_min": 0.3
                                                   }
                                               },
                                               "line_linked": {
                                                   "enable": false
                                               },
                                               "move": {
                                                   "random": true,
                                                   "speed": 1,
                                                   "direction": "top",
                                                   "out_mode": "out"
                                               }
                                           },
                                           "interactivity": {
                                               "events": {
                                                   "onhover": {
                                                       "enable": true,
                                                       "mode": "bubble"
                                                   },
                                                   "onclick": {
                                                       "enable": true,
                                                       "mode": "repulse"
                                                   }
                                               },
                                               "modes": {
                                                   "bubble": {
                                                       "distance": 250,
                                                       "duration": 2,
                                                       "size": 0,
                                                       "opacity": 0
                                                   },
                                                   "repulse": {
                                                       "distance": 400,
                                                       "duration": 4
                                                   }
                                               }
                                           }
                                       }}
                            />
                        </div>
                        <div className="content__text-header">
                            <Fade left>
                                <p className="content__text-header_small-para">
                                    Bienvenue Sur Aqua Vim
                                </p>
                            </Fade>
                            <Fade left>
                                <h1 className="content__text-header-title">

                                    VOTRE <span>MEILLEUR</span> PARTENAIRE <br/>
                                    POUR LES SOLUTIONS <br/>
                                    DE POMPAGE

                                </h1>
                            </Fade>
                            <div className="text-div"/>

                            <p className="content__text-header__para">
                                <span className={"maj"}>C</span>rée en 2016, eurl aqua vim est une entreprise implantée à alger spécialisée dans la vente, l'installation et la maintenance des système de pompage. <span className={"maj"}>G</span>râce à son expertise et au savoir faire de ses équipes techniques et commerciales, aqua vim s'assure d'offrir les meilleurs services à sa clientèle et ce en mettant à leur disposition des produits de marque de renommée internationale.                    </p>

                            <Fade bottom>
                                <VisibilitySensor
                                    active={!(to_top_button_hidden === "address")}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            set_to_top_button(false);
                                        }
                                    }}
                                    delayedCall>
                                    {/*<div className="content__text--btn-header">*/}
                                    {/*    <Link to=''>*/}
                                    {/*        <span><i className="fas fa-file-alt"></i> Explore Now</span>*/}
                                    {/*    </Link>*/}
                                    {/*    <Link to=''>*/}
                                    {/*        <span><i className="fas fa-layer-group"/> More Service</span>*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                </VisibilitySensor>
                            </Fade>

                        </div>
                        <Fade top>

                            <div className="pages-block">
                                <div className="numbers">
                                    <div className="page-number"><span>01</span>/06</div>
                                    <div className='leftRight'><i className="fas fa-chevron-left"/> <span>|</span> <i
                                        className="fas fa-chevron-right"/></div>
                                </div>
                                <div className="white-div">
                                    <div className="line"/>
                                </div>
                                <h1 className="page-name">Page d'accueil</h1>
                            </div>
                        </Fade>
                    </div>

                </SwiperSlide>
                {
                    sliders.slice(1).map(slider => {
                        return (
                                <SwiperSlide>

                                    <div className="header__item-v2" style={{
                                        backgroundImage: `url(https://www.admin.aqua-vim.com/${slider.image_path}` ,
                                    }}>

                                        <div className="layer">
                                            <Particles height={"100vh"}
                                                       params={{
                                                           "particles": {
                                                               "number": {
                                                                   "value": 300,
                                                                   "density": {
                                                                       "enable": false
                                                                   }
                                                               },
                                                               "size": {
                                                                   "value": 3,
                                                                   "random": true,
                                                                   "anim": {
                                                                       "speed": 4,
                                                                       "size_min": 0.3
                                                                   }
                                                               },
                                                               "line_linked": {
                                                                   "enable": false
                                                               },
                                                               "move": {
                                                                   "random": true,
                                                                   "speed": 1,
                                                                   "direction": "top",
                                                                   "out_mode": "out"
                                                               }
                                                           },
                                                           "interactivity": {
                                                               "events": {
                                                                   "onhover": {
                                                                       "enable": true,
                                                                       "mode": "bubble"
                                                                   },
                                                                   "onclick": {
                                                                       "enable": true,
                                                                       "mode": "repulse"
                                                                   }
                                                               },
                                                               "modes": {
                                                                   "bubble": {
                                                                       "distance": 250,
                                                                       "duration": 2,
                                                                       "size": 0,
                                                                       "opacity": 0
                                                                   },
                                                                   "repulse": {
                                                                       "distance": 400,
                                                                       "duration": 4
                                                                   }
                                                               }
                                                           }
                                                       }} />   </div>
                                    </div>

                                </SwiperSlide>

                        )
                    })
                }

            </Swiper>





            <div className="content__social-media-header">
                <div className="social-mediaBigBlock">
                    <div className="social-block">
                        <Link
                            to={{ pathname: "https://www.instagram.com/aqua_vim1/?fbclid=IwAR0wDSR4dpylh7nck3cvQn0gcS3fSL6WEUKVsas-dwT5wLbBEP4FFP1pAzg" }}
                            target="_blank">
                        <i className="fab fa-instagram"/> instagram
                        </Link>
                    </div>
                    <div className="social-block">
                        <Link
                            to={{ pathname: "https://web.facebook.com/eurl.aquavim/" }} target="_blank">
                            <i className="fab fa-facebook-f"/> facebook

                        </Link>

                    </div>
                    <div className="social-block">
                        <Link
                            to={{ pathname: "https://www.linkedin.com/in/aqua-vim-1976ab208?fbclid=IwAR1XRspkWB3GZ-z_FvotjXCg8Z6Zo9fIirVBjH6XCkBXqKtXfloxcdrIDgI" }} target="_blank">

                            <i className="fab fa-linkedin"/> Linkdin

                        </Link>
                    </div>
                </div>
            </div>



            {/*<div className="scroll-btn-container">*/}
            {/*    <LinkScroll to={'footer'} smooth={true} duration={1000}>*/}
            {/*        <div className="icon-scroll"></div>*/}
            {/*    </LinkScroll>*/}
            {/*</div>*/}

            <div className="content__scrolling-indicators">

            </div>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    sliders: selectSliders,
    to_top_button_hidden : selectToTopButtonState,
});

const mapDispatchToProps = dispatch => ({
    set_to_top_button : current_state => dispatch(setToTopButton(current_state)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
