import React from "react";
import Home from './components/Home/Home';
import Products from './components/Products/Products';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/products/:categories",
    exact: false,
    main: ({match}) => <Products match={match}/>
  },
];

export default routes;
