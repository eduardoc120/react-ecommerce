import React, { useEffect } from 'react';

import '../assets/styles/components/Pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (currentPage === 1) {
            document.getElementById('prev-pagination').classList.add('disabled');
            document.getElementById('next-pagination').classList.remove('disabled');
        }
        if (currentPage === pageNumbers.length) {
            document.getElementById('next-pagination').classList.add('disabled');
            document.getElementById('prev-pagination').classList.remove('disabled');
        }
    }, [currentPage, pageNumbers.length]);

    return (
        <nav className="pagination">
            <div className="prev-pagination disabled" id="prev-pagination" onClick={e => paginate(currentPage - 1)}>
                   <div className="arrow left-right"></div>
                   Previous 
            </div>
            <ul>
                {pageNumbers.map(number => (
                <li key={number} className={number === currentPage ? 'page-item current-page' : 'page-item'} onClick={e => paginate(number)} >
                    {number}
                </li>
                ))}
            </ul>
            <div className="next-pagination" id="next-pagination" onClick={e => paginate(currentPage + 1)}>
                Next 
                <div className="arrow arrow-right"></div>
            </div>
        </nav>
    );
;};

export default Pagination;
