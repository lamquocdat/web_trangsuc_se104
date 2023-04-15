import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

import Cart from '../Pages/Cart';
import PaymentInfo from '../Pages/Payment/PaymentInfo';
import PaymentFinish from '../Pages/Payment/PaymentFinish';
import Blog from '../Pages/Blog/Blog';
import ProductsPage from '../Pages/Products/Screens/ProductsPage';
import ProductsPage1 from '../Pages/Products/Screens/ProductsPage1';
import ProductsPage2 from '../Pages/Products/Screens/ProductsPage2';
import ProductsDetail from '../Pages/Products/Components/ProductDetail';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Book from '../Pages/Book/Book';
import Login from '../Pages/Login1/components/login.js';
import Account from '../Pages/Login1/components/profile.js';
import Register from '../Pages/Login1/components/register.js';
const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/*', component: <NotFound />, layout: null },
  { path: '/cart', component: <Cart /> },
  { path: '/paymentinfo', component: <PaymentInfo /> },
  { path: '/paymentfinish/:madonhang', component: <PaymentFinish /> },
  //Blog:
  {
    path: '/blog',
    component: <Blog />,
  },
  { path: '/products/nhan', component: <ProductsPage /> },
  {
    path: '/products/bong-tai',
    component: <ProductsPage1 />,
  },
  {
    path: '/products/day-chuyen',
    component: <ProductsPage2 />,
  },
  {
    path: '/productsdetail',
    component: <ProductsDetail />,
  },
  {
    path: '/aboutus',
    component: <AboutUs />,
  },
  {
    path: '/book',
    component: <Book />,
  },
  {
    path: '/login',
    component: <Login></Login>,
  },
  {
    path: '/register',
    component: <Register></Register>,
  },
  {
    path: '/account',
    component: <Account></Account>,
  },
];
export { publicRoutes };
