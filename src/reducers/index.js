const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_NEWSLETTER_SUBSCRIBER':
            return {
                ...state,
                newsletterSubscribers: [...state.newsletterSubscribers, action.payload]
            };
        case 'CHANGE_CURRENCY':
            return {
                ...state,
                currency: action.payload
            }
        case 'SORT_BLOG_POSTS':
            return {
                ...state,
                blogPosts: [...state.blogPosts.sort(action.payload)]
            }
        case 'SORT_PRODUCTS':
            return {
                ...state,
                products: [...state.products.sort(action.payload)]
            }
        case 'GET_SINGLE_POST':
            return {
                ...state,
                currentPost: state.blogPosts.find(element => element.slug === action.payload)
            };
        case 'GET_SINGLE_PRODUCT':
            return {
                ...state,
                currentProduct: state.products.find(element => element.id === action.payload)
            };
        case 'ADD_PRODUCT_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'CHANGE_QTY_PRODUCT':
            return {
                ...state,
                cart: [...state.cart.map(element => element.cartItemId === action.payload.cartItemId ? action.payload : element)]
            };
        case 'ADD_TO_BUYER':
            return {
                ...state,
                buyer: action.payload
            };
        case 'ADD_NEW_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;
