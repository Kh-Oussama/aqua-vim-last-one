import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import SousCategoriesItem from "../sous-categories-item/sous-categories-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {fetchSubcategoriesStart} from "../../redux/subcategories/subcategories.actions";
import {selectIsFetchingSubCat, selectSubcategories} from "../../redux/subcategories/subcategory.selectors";
import Loader from "../loader-content/loader.compoenent";
import {getCategoryStart} from "../../redux/categories/categories.actions";
import {selectCurrentCategory, selectUpdateLoading} from "../../redux/categories/categories.selectors";
import Pagination from "../Pagination/pagination.compoenent";
import Particles from "react-particles-js";
import Helmet from "react-helmet";


const SousCategories = ({ match, currentCategory, updateLoading, getCategoryStart, fetchSubcategories, isFetching, subcategories, history}) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetchSubcategories({id: match.params.id});
    }, [fetchSubcategories]);

    useEffect(() => {
        getCategoryStart({id: match.params.id});
    }, [getCategoryStart]);



    const filterSubCats = subcategories.filter( subcat =>
        subcat.title.toLowerCase().includes(searchField.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(10);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = filterSubCats.slice(indexOfFirstElement, indexOfLastElement);


    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className="Collection-Preview">
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
                    {
                        !updateLoading && currentCategory
                        ? <div className="shop-header__top-block">
                                <Link to='/'>
                                    <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                                    className="linkText">Home</span>
                                </Link>
                                <Link to='/categories'>
                                    <span> <i className="fas fa-chevron-right"/></span> <span
                                    className="linkText"> categories</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/${match.params.id}`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> {currentCategory.title}</span>
                                </Link>
                            </div>
                            : null
                    }


                </div>
                {
                    updateLoading
                    ? <div className="shop-header__content shop-header__contentLoading ">
                        <Loader/>
                        </div>
                        : currentCategory
                            ? <div className="shop-header__content">
                                <h1 className="title_1"> {currentCategory.title}</h1>
                            <Helmet>
                                <title>{currentCategory.title}</title>
                            </Helmet>
                                <p className="paragraph">
                                    {currentCategory.description}
                                </p>
                            </div>

                            : <div className="shop-header__content shop-header__contentLoading ">
                               <Loader/>
                                </div>
                }

                <div className="shop-header__bottom">
                    <div className="shop-header__bottom-pCount">
                        <i className="fas fa-tags"/> {!isFetching ? subcategories.length : null}
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
                                Search
                            </button>
                    </div>

                </div>
            </div>
            <div className="items-content">

                {
                    isFetching
                        ? <React.Fragment>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                            <div className="sous_categories_item sous-cat-loading">
                                <Loader/>
                            </div>
                        </React.Fragment>
                        : currentElements.length > 0
                        ? <React.Fragment>
                            {
                                currentElements.map(cat => {
                                    return (
                                        <SousCategoriesItem key={cat.id} imageUrl={cat.image_path} title={cat.title}
                                                            linkUrl={cat.id}/>
                                    )
                                })
                            }
                        </React.Fragment>
                        : <img src="/images/empty.png" className="empty-img" alt=""/>
                }
            </div>
            <div className="shop-header__bottom" style={{justifyContent: 'flex-end'}}>
                <Pagination elementPerPage={elementsPerPage} totalElements={subcategories.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    subcategories: selectSubcategories,
    isFetching: selectIsFetchingSubCat,
    currentCategory: selectCurrentCategory,
    updateLoading : selectUpdateLoading,
});


const mapDispatchToProps = dispatch => ({
    fetchSubcategories: category => dispatch(fetchSubcategoriesStart(category)),
    getCategoryStart : cat => dispatch(getCategoryStart(cat)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SousCategories));

