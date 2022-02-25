import React, {useEffect, useState} from 'react';
import {toggleSearchHidden} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import SearchProductItem from "../search-product-item/search-product-item.component";
import {fetchAllProductsStart} from "../../redux/products/products.actions";
import {createStructuredSelector} from "reselect";
import {selectAllProducts, selectIsFetchingAllPro} from "../../redux/products/product.selectors";
import Loader from "../loader-content/loader.compoenent";

const Search = ({toggleSearchHidden, isFetching, fetchProducts, products, search_hidden}) => {
    const [searchField, setSearchField] = useState('');

    const filteredProducts = products.filter(product => {
        return (
            product.type.toLowerCase().includes(searchField.toLowerCase()) ||
            product.description.toLowerCase().includes(searchField.toLowerCase()) ||
            product.mark.name.toLowerCase().includes(searchField.toLowerCase()) ||
            product.subcategory.title.toLowerCase().includes(searchField.toLowerCase()) ||
            product.category.title.toLowerCase().includes(searchField.toLowerCase())
        )
    });

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


    return (
        <div className="search-component">
            <div className="close-btn" onClick={toggleSearchHidden}>
                <span className="fas fa-times"/>
            </div>
            <div className="search-data">
                <input
                    type="text"
                    value={searchField}
                    onChange={event => setSearchField(event.target.value) }
                    required
                />
                <div className="line"/>
                <label htmlFor="">Type to search</label>
                <span className="fas fa-search"/>

            </div>
            {
                !searchField || filteredProducts.length === 0
                ? null
                    :<div className="result-section">
                        <div className="events-section">
                            <div className="events-section-bg"/>
                            {
                                isFetching
                                    ? <Loader/>
                                    : <React.Fragment>

                                        {
                                            filteredProducts.map(pro => {
                                                return (
                                                    <SearchProductItem type={pro.type} description={pro.description}
                                                                       debit_max={pro.debit_max} power={pro.power}
                                                                       hmt_max={pro.hmt_max}
                                                                       liquid_temperature={pro.liquid_temperature}
                                                                       imageUrl_1={pro.image_path}
                                                                       imageUrl_2={pro.images[1].image_path}
                                                                       mark={pro.mark.name} linkUrl={pro.id}
                                                                       func={toggleSearchHidden}
                                                    />
                                                )
                                            })
                                        }

                                    </React.Fragment>
                            }
                        </div>
                    </div>

            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingAllPro,
    products: selectAllProducts,
});

const mapDispatchToProps = dispatch => ({
    toggleSearchHidden: () => dispatch(toggleSearchHidden()),
    fetchProducts: () => dispatch(fetchAllProductsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

