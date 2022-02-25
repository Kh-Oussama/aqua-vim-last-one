import React from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';



const AboutUsSection = () => {
    return (
        <div className="about-us-section">
            <h2 className="heading-secondary">
                qui sommes nous</h2>

                {/*<p className="title-p title-description">*/}
                {/*    /!*<Fade left cascade>*!/*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore dolorum ducimus ea esse est iste.*/}
                {/*    /!*</Fade>*!/*/}
                {/*    </p>*/}
            <RubberBand>
            <div className="white-divider"/>
            </RubberBand>
            <div className="content">
                <div className="content__text">
                    {/*// <Fade left>*/}

                    {/*// </Fade>*/}

                        <h1 className="title_1">
                            {/*<Fade left cascade>*/}
                        Toujours a votre service
                        pour les solutions
                        de pompage
                            {/*</Fade>*/}
                    </h1>
                    {/*<RubberBand>*/}
                    <div className="text-div"/>
                    {/*</RubberBand>*/}
                    <p className="paragraph paragraph-2 ">
                        {/*<Fade left cascade>*/}
                        <span className={'maj'}>C</span>rée en 2016, Eurl Aqua Vim est une entreprise implantée à Alger
                        spécialisée dans la vente, l'installation et la maintenance des système de pompage.
                        <span className={'maj'}>G</span>râce à son expertise et au savoir faire de ses équipes techniques et commerciales, Aqua Vim s'assure d'offrir les meilleurs services à sa clientèle
                        et ce en mettant à leur disposition des produits de marque de renommée internationale.

                        {/*</Fade>*/}
                        </p>


                    {/*<Fade left>*/}
                    {/*    <div className="content__text--btn">*/}
                    {/*    <Link to=''>*/}
                    {/*        <i className="fas fa-arrow-right"/> Learn More*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*</Fade>*/}
                </div>
                <div className="content__imgBlock">
                    <figure className="img img--1">
                        <img src={"/images/f1.jpg"} alt="f1" className="img"/>
                    </figure>
                    <figure className="img img--2">
                        <img src={"/images/f2.jpg"} alt="f2" className="img"/>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;

