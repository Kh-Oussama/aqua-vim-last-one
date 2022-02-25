import React from "react";
import {Link, withRouter} from 'react-router-dom';
import Loader from "../loader-content/loader.compoenent";

const MenuItemLoader = () => {
    return (
        <div className="category_card">
            <div className="image-data">
                <div className="background_image" />
                <div className="publication-details">
                    <div className="author">
                        <Link to={""}>
                            <i className="fas fa-user"/> Julio Codes
                        </Link>
                    </div>
                    <span className="date"><i className="fas fa-calendar-alt"/> Marsh 30, 2020</span>
                </div>
            </div>
            <div className="post-data">
                <Loader/>


            </div>
        </div>
    );
};

export default withRouter(MenuItemLoader);
