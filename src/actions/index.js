export const addNewsletterSubscriber = payload => ({
    type: 'ADD_NEWSLETTER_SUBSCRIBER',
    payload
});

export const changeCurrency = payload => ({
    type: 'CHANGE_CURRENCY',
    payload
});

export const sortBlogPosts = payload => ({
    type: 'SORT_BLOG_POSTS',
    payload
});

export const getSinglePost = payload => ({
    type: 'GET_SINGLE_POST',
    payload
});

export const getSingleProduct = payload => ({
    type: 'GET_SINGLE_PRODUCT',
    payload
});

export const sortProducts = payload => ({
    type: 'SORT_PRODUCTS',
    payload
});

export const addProductCart = payload => ({
    type: 'ADD_PRODUCT_CART',
    payload
});

export const changeQtyProduct = payload => ({
    type: 'CHANGE_QTY_PRODUCT',
    payload
});

export const addToBuyer = payload => ({
    type: 'ADD_TO_BUYER',
    payload
});

export const addNewOrder = payload => ({
    type: 'ADD_NEW_ORDER',
    payload
});
