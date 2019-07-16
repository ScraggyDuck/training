import React from "react";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

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
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
