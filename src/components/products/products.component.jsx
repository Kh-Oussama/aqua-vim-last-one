import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import ProductsItem from "../products-item/products-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {fetchProductsStart} from "../../redux/products/products.actions";
import {selectIsFetchingPro, selectProducts} from "../../redux/products/product.selectors";
import Loader from "../loader-content/loader.compoenent";
import {getSubcategoryStart} from "../../redux/subcategories/subcategories.actions";
import {selectCurrentSubcategory, selectUpdateLoading} from "../../redux/subcategories/subcategory.selectors";
import Pagination from "../Pagination/pagination.compoenent";
import Particles from "react-particles-js";
import Helmet from "react-helmet";


const Products = ({ fetchProducts, currentSubcategory, updateLoading, getSubcategoryStart, isFetching, products, match, history }) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetchProducts({id: match.params.id});
    },[fetchProducts]);

    useEffect(() => {
        getSubcategoryStart({id: match.params.id});
    }, [getSubcategoryStart]);

    const filterProducts = products.filter( product =>
        product.type.toLowerCase().includes(searchField.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = filterProducts.slice(indexOfFirstElement, indexOfLastElement);

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
                        !updateLoading && currentSubcategory
                        ? <div className="shop-header__top-block">
                                <Link to='/'>
                                    <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span
                                    className="linkText">Home</span>
                                </Link>
                                <Link to='/categories'>
                                    <span> <i className="fas fa-chevron-right"/></span> <span
                                    className="linkText"> categories</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/${currentSubcategory[0].category.id }`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> { currentSubcategory[0].category.title }</span>
                                </Link>
                                <Link to={`/categories/sous_Categories/products/${currentSubcategory[0].id}`}>
                                    <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> {currentSubcategory[0].title} </span>
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
                        : currentSubcategory
                        ? <div className="shop-header__content">
                            <h1 className="title_1"> {currentSubcategory[0].title}</h1>
                            <Helmet>
                                <title>{currentSubcategory[0].title}</title>
                            </Helmet>
                            <p className="paragraph">
                                Home fragrance is the finishing touch to any room and no space is complete without it. Find a
                                wide
                                range of reed diffusers, scented candles and room sprays to invigorate the senses, with scents
                                to
                                suit all occasions, from floral and fruity to fresh and spicy.
                            </p>
                        </div>

                        : <div className="shop-header__content shop-header__contentLoading ">
                            <Loader/>
                        </div>
                }
                <div className="shop-header__bottom">
                    <div className="shop-header__bottom-pCount">
                        <i className="fas fa-tags"/> {!isFetching ? products.length : null} Products
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
                            <div className="product-grid product-grid-loading"><Loader/></div>
                            <div className="product-grid product-grid-loading"><Loader/></div>
                            <div className="product-grid product-grid-loading"><Loader/></div>
                          </React.Fragment>
                     : currentElements.length > 0
                        ? <React.Fragment>
                            {
                                currentElements.map(pro => {
                                    console.log(pro);
                                    return (
                                        <ProductsItem type={pro.type} description={pro.description} debit_max={pro.debit_max} power={pro.power} hmt_max={pro.hmt_max} liquid_temperature={pro.liquid_temperature} imageUrl_1={pro.image_path} imageUrl_2={pro.images[1].image_path} mark={pro.mark.name} linkUrl={pro.id} />
                                )
                                })
                            }
                        </React.Fragment>
                        : <img src="/images/empty.png" className="empty-img" alt=""/>
                }


            </div>
            <div className="shop-header__bottom" style={{justifyContent: 'flex-end'}}>
                <Pagination elementPerPage={elementsPerPage} totalElements={products.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingPro,
    products: selectProducts,
    currentSubcategory: selectCurrentSubcategory,
    updateLoading : selectUpdateLoading,
});


const mapDispatchToProps = dispatch => ({
    fetchProducts: category => dispatch(fetchProductsStart(category)),
    getSubcategoryStart : cat => dispatch(getSubcategoryStart(cat))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));