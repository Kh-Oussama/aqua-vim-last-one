import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectFade} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {Link, withRouter} from "react-router-dom";
import DescriptionCard from "../description-product-card/description-product-card.component";
import {createStructuredSelector} from "reselect";

import {connect} from "react-redux";
import {getProductStart} from "../../redux/products/products.actions";
import {selectCurrentProduct, selectUpdateLoading} from "../../redux/products/product.selectors";
import Loader from "../loader-content/loader.compoenent";
import Helmet from "react-helmet";

SwiperCore.use([Pagination, Navigation]);

const ViewProduct = ({ getProductStart,currentProduct,match,updateLoading,history }) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [active, setActive] = useState("FirstCard");


    useEffect(() => {
        getProductStart({id: match.params.id});
    }, [getProductStart]);


    return (
        <div className="view-product">
            <div className="view-product-topLeft">
                <div className="shop-header__top">
                    {
                        !updateLoading && currentProduct
                        ? <div className="shop-header__top-block">
                                <Helmet>
                                    <title>{ currentProduct[0].type }</title>
                                </Helmet>
                                <Link to='/'>
                                    <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                                    className="linkText">Home</span>
                                </Link>
                                <Link to='/categories'>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> categories</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/${currentProduct[0].category.id}`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].category.title }</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/products/${currentProduct[0].subcategory.id}`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].subcategory.title }</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/products/view_product/${match.params.id}`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].type }</span>
                                </Link>

                            </div>
                            : null
                    }

                </div>
            </div>

            {
                !updateLoading && !currentProduct
                ? <img src="/images/empty.png" className="empty-img" alt=""/>
                : <div className="view-product-content">
                        {
                            updateLoading
                                ? <div className="imageBlock imageBlock-loading">
                                    <Loader/>
                                </div>
                                : <React.Fragment>
                                    <div className="imageBlock">

                                        <Swiper
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            navigation={isPhone}
                                            loop
                                            pagination={{
                                                clickable: true,
                                            }}
                                            onSlideChange={() => {

                                            }}
                                            // onSwiper={(swiper) => console.log(swiper)}

                                        >

                                            {
                                                currentProduct[0].images.map(img => {
                                                    return (
                                                        <SwiperSlide>
                                                            <div className="item">
                                                                <img src={`https://www.admin.aqua-vim.com/${img.image_path}`} alt="img" className="img"/>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>

                                    </div>
                                </React.Fragment>
                        }

                        {
                            updateLoading
                                ? <div className="detail detail-loading">
                                    <Loader/>
                                </div>
                                :  <div className="detail">
                                    <h1 className="detail-title">
                                        {currentProduct[0].type}
                                    </h1>
                                    <p className="detail-p">
                                        {currentProduct[0].description}
                                    </p>
                                    <div className="detail-product-number">Product Number : {currentProduct[0].id}</div>
                                    <div className="detail-stars">
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="far fa-star"/>
                                    </div>
                                    <div className="detail-description-header">
                        <span className={active === "FirstCard" ? "active" : null}
                              onClick={() => setActive("FirstCard")}>Pompe</span>
                                        <span className={active === "SecondCard" ? "active" : null}
                                              onClick={() => setActive("SecondCard")}>Moteur</span>
                                        <span className={active === "ThirdCard" ? "active" : null}
                                              onClick={() => setActive("ThirdCard")}>Tension</span>
                                    </div>

                                    {
                                        active === "FirstCard" && <DescriptionCard content= {currentProduct[0].pump_description}/>
                                    }
                                    {
                                        active === "SecondCard" && <DescriptionCard content={currentProduct[0].engine_description} />
                                    }
                                    {
                                        active === "ThirdCard" && <DescriptionCard content={currentProduct[0].voltage_description} />
                                    }

                                    <div className="detail-priceBlock">
                                        <div className="price"></div>
                                        {/*<div className="qnt">10+ in stock</div>*/}
                                    </div>
                                    <div className="detail-actions">
                                        <div className="add">
                                            <Link target="_blank"
                                                  to={{ pathname: `https://www.admin.aqua-vim.com/${currentProduct[0].pdf_path}` }}
                                            >
                                                <i className="fas fa-file-download" /> telecharger la fiche technique
                                            </Link>

                                        </div>


                                    </div>
                                </div>
                        }


                    </div>
            }
            <div className="view-product-bottomLeft"/>
            <div className="view-product-bottomRight"/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    updateLoading : selectUpdateLoading,
    currentProduct: selectCurrentProduct,
});


const mapDispatchToProps = dispatch => ({
    getProductStart : cat => dispatch(getProductStart(cat)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewProduct));

