import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import Cart from "../Pages/Cart";
import PaymentInfo from "../Pages/Payment/PaymentInfo";
import PaymentFinish from "../Pages/Payment/PaymentFinish";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Cart /> },
    { path: "/paymentinfo", component: <PaymentInfo/> },
    { path: "/paymentfinish/:madonhang", component: <PaymentFinish/> },
];
export { publicRoutes };