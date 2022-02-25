import React, {useEffect, useState} from "react";

import Category from "../categories-item/categories-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {fetchCategoriesStart} from "../../redux/categories/categories.actions";
import {selectCategories, selectIsFetchingCat} from "../../redux/categories/categories.selectors";
import Loader from "../loader-content/loader.compoenent";
import MenuItemLoader from "../categories-item/categories-item-loader.component";
import {Link} from "react-router-dom";
import Particles from "react-particles-js";


const CollectionsOverview = ({ fetchCategories, isFetching, categories }) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetchCategories();
    },[fetchCategories]);


    const filterCats = categories.filter( cat =>
        cat.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
        <React.Fragment>
            <div className="shop-header">
                <div className="layer">
                    <Particles height={"100%"}
                               params={{
                                   "particles": {
                                       "number": {
                                           "value": 500,
                                           "density": {
                                               "enable": true,
                                               "value_area": 800
                                           }
                                       },
                                       "style":{
                                           "width": '100%',
                                       },
                                       "color": {
                                           "value": "#000"
                                       },
                                       "line_linked": {
                                           "enable": true,
                                           "opacity": 0.03,
                                           "color": {
                                               "value": "#000"
                                           },
                                       },
                                       "move": {
                                           "speed": 1
                                       },
                                       "size": {
                                           "value": 1
                                       },
                                       "opacity": {
                                           "anim": {
                                               "enable": true,
                                               "speed": 1,
                                               "opacity_min": 0.05
                                           }
                                       }
                                   },
                                   "interactivity": {
                                       "events": {
                                           "onclick": {
                                               "enable": true,
                                               "mode": "push"
                                           }
                                       },
                                       "modes": {
                                           "push": {
                                               "particles_nb": 1
                                           }
                                       }
                                   },
                                   "retina_detect": true
                               }} />
                </div>
                <div className="shop-header__top">
                    <div className="shop-header__top-block">
                        <Link to='/'>
                            <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                            className="linkText">Home</span>
                        </Link>
                        <Link to='/categories'>
                            <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> categories</span>
                        </Link>
                    </div>
                </div>
                <div className="shop-header__content">
                    <h1 className="title_1">
                        catégories
                    </h1>
                    <p className="paragraph">
                        Nous vous proposons des solutions et services personnalisés pour vous accompagner dans le développement de vos systèmes de pompage.

                    </p>
                </div>
                <div className="shop-header__bottom">
                    <div className="shop-header__bottom-pCount">
                        <i className="fas fa-tags"/> { !isFetching ? categories.length :null }
                    </div>
                    <div className="shop-header__bottom-sortBy">
                            <input
                                type="search"
                                className="form__input"
                                placeholder="Rechercher ici ...."
                                value={searchField}
                                onChange={event => setSearchField(event.target.value) }

                            />
                            <button className="form__button">
                                Rechercher
                            </button>
                    </div>

                </div>
            </div>
            <div className="categories-section">

                <div className="categories-section-bg"/>
                {
                    isFetching
                        ? <React.Fragment>
                            <div className="loader-container"><Loader/></div>
                            <div className="loader-container"><Loader/></div>

                        </React.Fragment>
                        :
                        filterCats.length > 0
                            ? <React.Fragment>
                                {
                                    filterCats.map(cat => {
                                        return (
                                            <Category key={cat.id} title={cat.title} imageUrl={cat.image_path} subtitle={cat.subtitle} description={cat.description} linkUrl={cat.id} />
                                        )
                                    })
                                }
                            </React.Fragment>
                            : <img src="/images/empty.png" className="empty-img" alt=""/>
                }

            </div>
        </React.Fragment>


    )
};


const mapStateToProps = createStructuredSelector({
    isFetching : selectIsFetchingCat,
    categories : selectCategories,
});


const mapDispatchToProps = dispatch => ({
    fetchCategories : () => dispatch(fetchCategoriesStart()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview);

