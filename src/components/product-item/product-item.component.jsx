import React from "react";
import {Link, withRouter} from 'react-router-dom';


const ProductItem = ({title, history, lastPrice, currentPrice, imageUrl1, imageUrl2, linkUrl = 'shop', match}) => {

    return (
        <div className="product-grid">
            {/*<Link to="/view">*/}

            <div className="product-image">
                <img className="pic-1" src={imageUrl1} alt={""}/>
                <img className="pic-2" src={imageUrl2} alt={""}/>

                <span className="product-trend-label">
                        TRENDING
                    </span>
                <ul className="social">
                    <li>
                        <Link to='' data-tip="Add to cart">
                            <i className="fa fa-shopping-cart"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='' data-tip="wishlist">
                            <i className="fa fa-heart"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='' data-tip="Compare">
                            <i className="fa fa-random"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='' data-tip="Quick View">
                            <i className="fa fa-search"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="product-content">
                <h3 className="title"><Link to=""> {title}</Link></h3>
                <div className="price discount"><span>{lastPrice}</span> {currentPrice}</div>
            </div>
            {/*</Link>*/}
        </div>
    );
};

export default withRouter(ProductItem);
