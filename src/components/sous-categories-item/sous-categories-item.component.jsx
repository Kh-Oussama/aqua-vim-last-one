import React from "react";
import {Link, withRouter} from 'react-router-dom';

const SousCategoriesItem = ({title, history, imageUrl, linkUrl , match, loa}) => {
    return (

        <div className={'sous_categories_item'}>
            <Link to={`/categories/sous_Categories/products/${linkUrl}`}>
              <img src={`https://www.admin.aqua-vim.com/${imageUrl}`} alt="item"/>
              <div className="title">{title}</div>
            </Link>
            </div>

    );
};

export default withRouter(SousCategoriesItem);
