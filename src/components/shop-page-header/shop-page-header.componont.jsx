import React from 'react';
import {Link} from "react-router-dom";

const ShopPageHeader = () => {

    return (
        <div className="shop-header">
            <div className="shop-header__top">
                <div className="shop-header__top-block">
                    <Link to='/'>
                        <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                        className="linkText">Home</span>
                    </Link>
                    <Link to='/shop'>
                        <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">Candles & Home Fragrance</span>
                    </Link>
                </div>
            </div>
            <div className="shop-header__content">
                <h1 className="title_1">Candles & Home Fragrance</h1>
                <p className="paragraph">
                    Home fragrance is the finishing touch to any room and no space is complete without it. Find a wide
                    range of reed diffusers, scented candles and room sprays to invigorate the senses, with scents to
                    suit all occasions, from floral and fruity to fresh and spicy.
                </p>
            </div>
            <div className="shop-header__bottom">

                <div className="shop-header__bottom-sortBy">
                    <form action="#" className="form">
                        <input type="text" className="form__input" placeholder=""/>
                        <button className="form__button">
                            Search
                        </button>
                    </form>
                </div>
                <div className="shop-header__bottom-pages">
                    <span className="text">Page</span>
                    <span className="number number-active">01</span>
                    <span className="number">02</span>
                    <span className="number">03</span>
                </div>
                <div className="shop-header__bottom-pCount">
                    <i className="fas fa-tags"/> 1118 Products
                </div>
            </div>
        </div>
    );
}
export default ShopPageHeader