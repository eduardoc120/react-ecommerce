import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Search.css';

import ArticleItem from '../components/ArticleItem';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';

const Search = props => {

    const [state, setState] = useState({
        search: '',
        productsResults: [],
        blogResults: [],
        results: [],
        searched: false,
    });

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage ] = useState(9);

    const inputHandler = e => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const buttonHandler = () => {
        setState(
            {
                ...state,
                productsResults: [],
                blogResults: [],    
                results: [...props.products.filter(product => product.title.toLowerCase().includes(state.search.toLowerCase() ) ), ...props.blogPosts.filter(blogPost => blogPost.title.toLowerCase().includes(state.search.toLowerCase() ) )],
                searched: true
            }
        );
        setCurrentPage(1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = state.results.slice(indexOfFirstItem, indexOfLastItem);
    if (state.productsResults.length + state.blogResults.length === 0) {
        currentItems.forEach(element => {
            if (element.price) {
                state.productsResults.push(element);
                return;
            }
            state.blogResults.push(element);
        });
    }

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        setState({
            ...state,
            productsResults: [],
            blogResults: []
        });
    }

    return (
        <div className="search-page container">
            <div className="search-container">
                <h2>Search Our Site</h2>
                <div>
                    <input type="text" name="search" placeholder="Search" onChange={inputHandler} />
                    <button onClick={buttonHandler}><i className="fas fa-search"></i></button>
                </div>
            </div>
            {   state.searched ?
                    <>
                        <hr />
                        <h2>{state.results.length} Results</h2>
                    </>
                : null
            }
            {   state.productsResults.length > 0 ?
                    <div className="products-results">
                        {state.productsResults.map(product => 
                            <ProductItem 
                                key={product.id} 
                                {...product} 
                                currency={props.currency} 
                                currencyRates={props.currencyRates} 
                            />
                        )}
                    </div>
                :
                    null
            }
            {   state.blogResults.length > 0 ?
                    <div className="blog-results">
                        { state.blogResults.map(article => <ArticleItem key={article.id} {...article} />) }
                    </div>
                : 
                    null
            }
            {state.results.length > 0 ? <Pagination postsPerPage={itemsPerPage} totalPosts={state.results.length} paginate={paginate} currentPage={currentPage} /> : null}
        </div>
    );
};

const mapStateToProps = state => ({
    blogPosts: state.blogPosts,
    products: state.products,
    currency: state.currency,
    currencyRates: state.currencyRates
});

export default connect(mapStateToProps, null)(Search);