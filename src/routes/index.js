import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Cart /> },
    { path: "/payment", component: <Payment /> },
];
export { publicRoutes };