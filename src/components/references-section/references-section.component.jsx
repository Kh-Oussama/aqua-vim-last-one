import React, {useState} from 'react';
import {motion} from "framer-motion";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectReferences} from "../../redux/references/reference.selectors";

const ReferencesSection = ({references}) => {

    const [active, setActive] = useState("hotels");
    const [activeDone, setActiveDone] = useState("hotels");
    return (
        <div className="References-section" id="references">
            <p className="title-p before-title">
                {/*<Fade left cascade>*/}
                Nos Travaux
                {/*</Fade>*/}
            </p>            <h2 className="heading-secondary">References</h2>
            <p className="title-p title-description">
                {/*<Fade left cascade>*/}
                Grâce à son expertise et son savoir faire, Aqua Vim a pu acquérir plusieurs projets sur tout le territoire national
                {/*</Fade>*/}
            </p>
            <RubberBand>
                <div className="white-divider"/>
            </RubberBand>
            <div className="projects__state">
                <h1>
                    {/*<i className="fas fa-business-time"/>*/}
                    <i className="fas fa-calendar-check"/>
                    <span>
                        {/*<Fade left cascade>*/}
                        Projets réalisés:
                        {/*</Fade>*/}
                    </span>
                </h1>
            </div>
            <div className="References-section__header">

                <motion.div
                    whileHover={{scale: 1.1, originX: 0}}
                    transition={{type: 'spring', stiffness: 300}}
                    whileTap={{scale: 0.9}}
                    className={active === "hotels" ? "active" : null} onClick={() => setActive('hotels')}><i
                    className="fas fa-hotel"/> hotels
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, originX: 0}}
                    transition={{type: 'spring', stiffness: 300}}
                    whileTap={{scale: 0.9}}
                    className={active === "centers" ? "active" : null} onClick={() => setActive('centers')}><i
                    className="fab fa-shopify"/>centers
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, originX: 0}}
                    transition={{type: 'spring', stiffness: 300}}
                    whileTap={{scale: 0.9}}
                    className={active === "companies" ? "active" : null} onClick={() => setActive('companies')}><i
                    className="fas fa-briefcase"/>companies
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, originX: 0}}
                    transition={{type: 'spring', stiffness: 300}}
                    whileTap={{scale: 0.9}}
                    className={active === "gardens" ? "active" : null} onClick={() => setActive('gardens')}><i
                    className="fas fa-cannabis"/>gardens
                </motion.div>
            </div>
            {
                active === "hotels" &&
                <div className="content">
                    {
                        references.map(ref => {
                            if ( ref.category.name === 'Hotels')
                                return (
                                    <div className="content__item carts__cart" style={{
                                        backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>
                                        <div className="content__item--b">
                                            <h1 className="service">
                                                <i className="fas fa-tools"/> Service : {ref.service}
                                            </h1>
                                            <div className="cat-ref">
                                                <h1><i className="fas fa-hotel"/> hotels</h1>
                                                <h2>{ref.name}</h2>
                                            </div>
                                        </div>

                                    </div>
                                )
                        })

                    }
                </div>
            }
            {
                active === "centers" &&
                <div className="content">
                    {
                        references.map(ref => {
                            if ( ref.category.name === 'Centers')
                                return (
                                    <div className="content__item carts__cart" style={{
                                        backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>
                                        <div className="content__item--b">
                                            <h1 className="service">
                                                <i className="fas fa-tools"/> Service : {ref.service}
                                            </h1>
                                            <div className="cat-ref">
                                                <h1><i className="fas fa-hotel"/> centers</h1>
                                                <h2>{ref.name}</h2>
                                            </div>
                                        </div>

                                    </div>
                                )
                        })

                    }

                </div>
            }
            {
                active === "companies" &&
                <div className="content">
                    {
                        references.map(ref => {
                            if ( ref.category.name === 'Companies')
                                return (
                                    <div className="content__item carts__cart" style={{
                                        backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>
                                        <div className="content__item--b">
                                            <h1 className="service">
                                                <i className="fas fa-tools"/> Service : {ref.service}
                                            </h1>
                                            <div className="cat-ref">
                                                <h1><i className="fas fa-hotel"/> companies</h1>
                                                <h2>{ref.name}</h2>
                                            </div>
                                        </div>

                                    </div>
                                )
                        })

                    }
                </div>
            }
            {
                active === "gardens" &&
                <div className="content">
                    {
                        references.map(ref => {

                            if ( ref.category.name === 'Gardens')
                                return (
                                    <div className="content__item carts__cart" style={{
                                        backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>
                                        <div className="content__item--b">
                                            <h1 className="service">
                                                <i className="fas fa-tools"/> Service : {ref.service}
                                            </h1>
                                            <div className="cat-ref">
                                                <h1><i className="fas fa-hotel"/> gardens</h1>
                                                <h2>{ref.name}</h2>
                                            </div>

                                        </div>

                                    </div>
                                )
                        })

                    }
                </div>
            }

            {/*<div className="projects__state end">*/}
            {/*    <h1>*/}
            {/*        /!*<i className="fas fa-business-time"/>*!/*/}
            {/*        <i className="fas fa-calendar-check"/>*/}
            {/*        <span>*/}
            {/*            /!*<Fade left cascade>*!/*/}
            {/*                Projets réalisés:*/}
            {/*            /!*</Fade>*!/*/}
            {/*        </span>*/}
            {/*    </h1>*/}
            {/*</div>*/}
            {/*<div className="References-section__header">*/}

            {/*    <motion.div*/}
            {/*        whileHover={{scale: 1.1, originX: 0}}*/}
            {/*        transition={{type: 'spring', stiffness: 300}}*/}
            {/*        whileTap={{scale: 0.9}}*/}
            {/*        className={activeDone === "hotels" ? "active" : null} onClick={() => setActiveDone('hotels')}><i*/}
            {/*        className="fas fa-hotel"/> hotels*/}
            {/*    </motion.div>*/}
            {/*    <motion.div*/}
            {/*        whileHover={{scale: 1.1, originX: 0}}*/}
            {/*        transition={{type: 'spring', stiffness: 300}}*/}
            {/*        whileTap={{scale: 0.9}}*/}
            {/*        className={activeDone === "centers" ? "active" : null} onClick={() => setActiveDone('centers')}><i*/}
            {/*        className="fab fa-shopify"/>centers*/}
            {/*    </motion.div>*/}
            {/*    <motion.div*/}
            {/*        whileHover={{scale: 1.1, originX: 0}}*/}
            {/*        transition={{type: 'spring', stiffness: 300}}*/}
            {/*        whileTap={{scale: 0.9}}*/}
            {/*        className={activeDone === "companies" ? "active" : null} onClick={() => setActiveDone('companies')}>*/}
            {/*        <i*/}
            {/*            className="fas fa-briefcase"/>companies*/}
            {/*    </motion.div>*/}
            {/*    <motion.div*/}
            {/*        whileHover={{scale: 1.1, originX: 0}}*/}
            {/*        transition={{type: 'spring', stiffness: 300}}*/}
            {/*        whileTap={{scale: 0.9}}*/}
            {/*        className={activeDone === "gardens" ? "active" : null} onClick={() => setActiveDone('gardens')}><i*/}
            {/*        className="fas fa-cannabis"/>gardens*/}
            {/*    </motion.div>*/}
            {/*</div>*/}


            {/*{*/}
            {/*    activeDone === "hotels" &&*/}
            {/*    <div className="content">*/}
            {/*        {*/}
            {/*            references.map(ref => {*/}
            {/*                if ( ref.state === 1 && ref.category.name === 'Hotels')*/}
            {/*                    return (*/}
            {/*                        <div className="content__item carts__cart" style={{*/}
            {/*                            backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>*/}
            {/*                            <div className="content__item--b">*/}
            {/*                                <h1 className="service">*/}
            {/*                                    <i className="fas fa-tools"/> Service : {ref.service}*/}
            {/*                                </h1>*/}
            {/*                                <div className="cat-ref">*/}
            {/*                                    <div className="cat-ref">*/}
            {/*                                <h1><i className="fas fa-hotel"/> hotels</h1>*/}
            {/*                                <h2>{ref.name}</h2>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                        </div>*/}
            {/*                    )*/}
            {/*            })*/}

            {/*        }*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    activeDone === "centers" &&*/}
            {/*    <div className="content">*/}
            {/*        {*/}
            {/*            references.map(ref => {*/}
            {/*                if ( ref.state === 1 && ref.category.name === 'Centers')*/}
            {/*                    return (*/}
            {/*                        <div className="content__item carts__cart" style={{*/}
            {/*                            backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>*/}
            {/*                            <div className="content__item--b">*/}
            {/*                                <h1 className="service">*/}
            {/*                                    <i className="fas fa-tools"/> Service : {ref.service}*/}
            {/*                                </h1>*/}
            {/*                                <div className="cat-ref">*/}
            {/*                                <h1><i className="fas fa-hotel"/> centers</h1>*/}
            {/*                                <h2>{ref.name}</h2>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                        </div>*/}
            {/*                    )*/}
            {/*            })*/}

            {/*        }*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    activeDone === "companies" &&*/}
            {/*    <div className="content">*/}
            {/*        {*/}
            {/*            references.map(ref => {*/}
            {/*                if ( ref.state === 1 && ref.category.name === 'Companies')*/}
            {/*                    return (*/}
            {/*                        <div className="content__item carts__cart" style={{*/}
            {/*                            backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>*/}
            {/*                            <div className="content__item--b">*/}
            {/*                                <h1 className="service">*/}
            {/*                                    <i className="fas fa-tools"/> Service : {ref.service}*/}
            {/*                                </h1>*/}
            {/*                                <div className="cat-ref">*/}
            {/*                                <h1><i className="fas fa-hotel"/> companies</h1>*/}
            {/*                                <h2>{ref.name}</h2>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                        </div>*/}
            {/*                    )*/}
            {/*            })*/}

            {/*        }*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    activeDone === "gardens" &&*/}
            {/*    <div className="content">*/}
            {/*        {*/}
            {/*            references.map(ref => {*/}

            {/*                if ( ref.state === 1 && ref.category.name === 'Gardens')*/}
            {/*                    return (*/}
            {/*                        <div className="content__item carts__cart" style={{*/}
            {/*                            backgroundImage: `url(https://www.admin.aqua-vim.com/${ref.image_path}`,}}>*/}
            {/*                            <div className="content__item--b">*/}
            {/*                                <h1 className="service">*/}
            {/*                                    <i className="fas fa-tools"/> Service : {ref.service}*/}
            {/*                                </h1>*/}
            {/*                                <div className="cat-ref">*/}
            {/*                                <h1><i className="fas fa-hotel"/> gardens</h1>*/}
            {/*                                <h2>{ref.name}</h2>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                        </div>*/}
            {/*                    )*/}
            {/*            })*/}

            {/*        }*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    references: selectReferences,
});


const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ReferencesSection);
