import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { getSinglePost } from '../actions';

import '../assets/styles/components/Article.css';

const Article = props => {
    
    const { slug } = useParams();
    props.getSinglePost(slug);

    return (
        <>
          { props.article ? 
                <>
                    <div className="article">
                        <div className="image-container">
                            <img src={props.article.imgUrl} alt="article" />
                        </div>
                        <div className="article-text" >
                            <span className="date">{props.article.date}</span>
                            <h2>{props.article.title}</h2>
                            <div className="content" dangerouslySetInnerHTML={{__html: props.article.content}}></div>
                            <span className="autor">Posted by {props.article.autor}</span>
                        </div>
                    </div>
                </>
            : 
                props.article === null ? 
                    'loading' 
                : 
                    <Redirect to="/not-found" />
          }
        </>
    );
}

const mapStateToProps = state => ({
    article: state.currentPost
});

const mapDispatchToProps = {
    getSinglePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
