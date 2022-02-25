import React from "react";
import {Link, withRouter} from 'react-router-dom';

const ProductsItem = ({type, history,description,debit_max,mark,power,hmt_max,liquid_temperature, imageUrl_1,imageUrl_2, linkUrl}) => {
    return (

        <div className="product-grid">
            <div className="product-image">
                <Link to="">
                    <img className="pic-1" src={`https://www.admin.aqua-vim.com/${imageUrl_1}`} alt={"img 1"}/>
                    <img className="pic-2" src={`https://www.admin.aqua-vim.com/${imageUrl_2}`} alt={"img 2"}/>
                </Link>
                <span className="product-trend-label">
                        DISPONIBLE
                    </span>
            </div>
            <div className="product-content">
                    <div className="product-content-title">
                        <h3 className="title">{type}</h3>
                        <h4 className="subtitle">{description}</h4>
                        <div className="description-block">
                            <div className="description-attribute des-bl">Marque</div>
                            <div className="description-value des-bl">{mark}</div>
                        </div>
                    </div>
                     <div className="product-content-description">
                         <div className="description-block">
                             <div className="description-attribute">Débit max.</div>
                             <div className="description-value">{debit_max}  m/h</div>
                         </div>
                         <div className="description-block">
                             <div className="description-attribute">Hmt_max.</div>
                             <div className="description-value">{hmt_max} bar</div>
                         </div>
                         <div className="description-block">
                             <div className="description-attribute">Températeur Liquide.</div>
                             <div className="description-value">{liquid_temperature} C</div>
                         </div>
                         <div className="description-block">
                             <div className="description-attribute">Puissance nominal.</div>
                             <div className="description-value">{power}</div>
                         </div>
                    </div>
                    <button className='btn' onClick={() => history.push(`/categories/sous_Categories/products/view_product/${linkUrl}`)}>
                        <i className="far fa-file-alt"/> Apercu
                    </button>
             </div>
        </div>

    );
};

export default withRouter(ProductsItem);
