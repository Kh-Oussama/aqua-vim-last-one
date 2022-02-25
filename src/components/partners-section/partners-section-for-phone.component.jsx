import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import { motion } from "framer-motion";
import {fetchMarksStart} from "../../redux/marks/marks.actions";
import {selectIsFetchingM, selectMarks} from "../../redux/marks/maks.selectors";
import Loader from "../loader-content/loader.compoenent";
import Category from "../categories-item/categories-item.component";
import Partner from "../partners-item/partners-item.compoenent";

SwiperCore.use([Pagination]);
const Partners = ({ fetchPartners, isFetching, partners}) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    useEffect(() => {
        fetchPartners();
    },[fetchPartners]);

    return (
        <section className="partners-section">
            <div className="partners-section-header">
                <h1 className="title_2">nos partenaires</h1>
                <h1 className="title_1">
                    depuis sa création en 2016
                </h1>
                <p className="paragraph">
                    {/*<Fade left cascade>*/}

                    Depuis sa création en 2016, AQUA VIM ne se lie qu’avec des fournisseurs  <br/>
                    de renommée internationale, afin de mettre au service de sa clientèle des  produits <br/>
                    avec le meilleur rapport qualité/prix.
                    </p>
            </div>
            <div className="carts">
                <Swiper
                    spaceBetween={100}
                    slidesPerView={Math.floor(width / 500) + 1.5}
                    pagination={{clickable: true}}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}

                >
                    {
                        isFetching
                            ? <React.Fragment>
                                <div className="loader-container"><Loader/></div>
                                <div className="loader-container"><Loader/></div>

                            </React.Fragment>
                            :
                            partners.length > 0
                                ? <React.Fragment>
                                    {
                                        partners.map(partner => {
                                            console.log(partner)
                                            return (
                                                <SwiperSlide key={partner.id}>
                                                    <Partner name={partner.name} imageUrl={partner.image_path} />
                                                </SwiperSlide>                                            )
                                        })
                                    }
                                </React.Fragment>
                                : <img src="/images/empty.png" className="empty-img" alt=""/>
                    }

                </Swiper>
            </div>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    isFetching : selectIsFetchingM,
    partners : selectMarks,
});

const mapDispatchToProps = dispatch => ({
    fetchPartners : () => dispatch(fetchMarksStart()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Partners);
