import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import AboutUs from '../containers/AboutUs';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Cart from '../containers/Cart';
import Articles from '../containers/Articles';
import Article from '../containers/Article';
import Search from '../containers/Search';
import Products from '../containers/Products';
import Product from '../containers/Product';
import ShippingInfo from '../containers/ShippingInfo';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/blog" component={Articles} />
                <Route exact path="/blog/:slug" component={Article} />
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/checkout/shipping" component={ShippingInfo} />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/success" component={Success} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
