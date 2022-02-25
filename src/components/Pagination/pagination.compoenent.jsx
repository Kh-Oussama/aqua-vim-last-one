import React from 'react';

const Pagination = ({elementPerPage, totalElements, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalElements / elementPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className="shop-header__bottom-pages" style={{display: 'block', flex: '0 0 25%'}}>
            <span className="text">Page</span>
            {
                pageNumbers.map(number => {
                    return (
                        <span onClick={() => paginate(number)} key={number}
                              className={`number ${currentPage === number ? 'number-active' : null}`}>{number}</span>
                    )
                })
            }

        </div>
    )
}

export default Pagination;