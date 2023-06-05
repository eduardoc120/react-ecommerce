import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { sortBlogPosts } from '../actions';

import '../assets/styles/components/Articles.css';
import ArticleItem from '../components/ArticleItem';
import Pagination from '../components/Pagination';

const Articles = props => {

    const { sortBlogPosts } = props;

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(8);

    const sortOptions = {
        'A-Z': (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
        'Z-A': (a, b) => a.title < b.title ? 1 : a.title > b.title ? -1 : 0,
        'new-to-old': (a, b) => a.comparisonDate > b.comparisonDate ? -1 : a.comparisonDate < b.comparisonDate ? 1 : 0,
        'old-to-new': (a, b) => a.comparisonDate > b.comparisonDate ? 1 : a.comparisonDate < b.comparisonDate ? -1 : 0,
    };

    useEffect(() => {
        sortBlogPosts((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
    }, [sortBlogPosts]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="blog-container">
            <h2>Articles</h2>
            <div className="articles-settings" >
                <div>
                    <label htmlFor="sort">Sort By</label>
                    <select name="sort" id="articles-sort-by" onChange={e => sortBlogPosts(sortOptions[document.getElementById('articles-sort-by').value])} >
                        <option value="A-Z">Alphabetically, A-Z</option>
                        <option value="Z-A">Alphabetically, Z-A</option>
                        <option value="new-to-old">Date, new to old</option>
                        <option value="old-to-new">Date, old to new</option>
                    </select>
                </div>
                <span>{props.blogPosts.length > 1 ? `${props.blogPosts.length} articles` : `${props.blogPosts.length} article`}</span>
            </div>
            <div className="articles container">
                { currentPosts.map(article => <ArticleItem key={article.id} {...article} />) }
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={props.blogPosts.length} paginate={paginate} currentPage={currentPage} />
        </div>
    );
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts
});

const mapDispatchToProps = {
    sortBlogPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
