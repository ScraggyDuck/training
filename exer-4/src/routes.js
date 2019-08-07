import React from "react";

import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Login/Login';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/products",
    exact: true,
    main: ({match}) => <Products  match={match}/>
  },
  {
    path: "/products/:name",
    exact: false,
    main: ({match}) => <ProductDetail  match={match} />
  },
  {
    path: "/cart",
    exact: false,
    main: () => <Cart />
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
