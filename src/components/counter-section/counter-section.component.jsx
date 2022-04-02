import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from "react-countup";
import {createStructuredSelector} from "reselect";
import {selectCurrentConfig} from "../../redux/config/config.selectors";
import {connect} from "react-redux";


const CounterSection = ({currentConfig}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (

        <div className="Counter-section">

            <div className="Counter-section__top">
                <div className="counter-block">
                    <div className="counter-block__item">
                        <CountUp end={currentConfig.expNbr} start={viewPortEntered ? null : 0}>
                            {({countUpRef}) => (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall>
                                    <h1>
                                        <span ref={countUpRef}/>
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>ans d'éxpérience</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={currentConfig.projectsNbr} start={viewPortEntered ? null : 0}>
                            {({countUpRef}) => (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall>
                                    <h1>
                                        <span ref={countUpRef}/>
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>projets réalisés</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={currentConfig.sysNbr} start={viewPortEntered ? null : 0}>
                            {({countUpRef}) => (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall>
                                    <h1>
                                        <span ref={countUpRef}/>
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>Systèmes livrés</span>
                    </div>
                    <div className="counter-block__item">
                        <CountUp end={currentConfig.clientsNbr} start={viewPortEntered ? null : 0}>
                            {({countUpRef}) => (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall>
                                    <h1>
                                        <span ref={countUpRef}/>
                                    </h1>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span>clients</span>
                    </div>
                </div>
            </div>
            <div className="Counter-section__bottom">
                <img src={'/images/c.jpg'} alt="image"/>
                <div className="Counter-section__addressBlock">
                    <h1 className="title_1">
                        {/*<Fade left cascade>*/}
                        {currentConfig.clientsNbr} Clients font déja confiance <br/> a Aqua vim ! nous serons heureux de vous compter
                        parmi eux.
                        {/*</Fade>*/}
                    </h1>
                    <p className="paragraph paragraph-2 ">
                        {/*<Fade left cascade>*/}
                        Toujours à votre service, nous nous engageons à asurer le succés de nos clients du début a la
                        fin.
                        {/*</Fade>*/}
                    </p>
                    {/*<Fade right>*/}
                    {/*<div className="content__text--btn">*/}
                    {/*    <Link to=''>*/}
                    {/*        <i className="fas fa-arrow-right"/> Learn More*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*</Fade>*/}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentConfig: selectCurrentConfig,
});


export default connect(mapStateToProps, null)(CounterSection);
