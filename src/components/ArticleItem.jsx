import React from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/components/ArticleItem.css';

const ArticleItem = props => { 

    const ArticleContent = props.content;
    const html = document.createElement('div');
    html.innerHTML = ArticleContent;

    const history = useHistory();

    const handleClick = () => {
        window.scrollTo(0, 0);
        history.push(`/blog/${props.slug}`);
    };
    
    return (
        <div className="article-item" onClick={handleClick} >
            <div className="image-container">
                <img src={props.imgUrl} alt="blog-thumbnail" />
            </div>
            <div className="article-details">
                <span className="date">{props.date}</span>
                <h3>{props.title}</h3>
                <p>{html.innerText.slice(0, 116)}...</p>
            </div>
        </div>
    );
}

export default ArticleItem;
