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
import HomeAdmin from '../admin/pages/home/home_admin';

import Login from '../Pages/Login1/components/login.js';
import Account from '../Pages/Login1/components/profile.js';
import Register from '../Pages/Login1/components/register.js';
import Forgot from '../Pages/Login1/components/forgot';
import Reset from '../Pages/Login1/components/otpForgot';
import Orders from '../Pages/Orders/Orders.js';
import Recovery from '../Pages/Login1/components/recovery';
import { AuthorizedUser, LoggedUser } from '../Pages/Login1/authenticate';
import OrderDetailProducts from '../Pages/Orders/OrderDetailProduct';

import ChangePassword from '../Pages/Login1/components/changePassword';
const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '*', component: <NotFound />, layout: null },
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
    component: (
      <LoggedUser>
        <Login></Login>
      </LoggedUser>
    ),
  },
  {
    path: '/register',
    component: <Register></Register>,
  },
  {
    path: '/account/:_id',
    component: (
      <AuthorizedUser>
        <Account></Account>
      </AuthorizedUser>
    ),
  },
  {
    path: '/forgot',
    component: <Forgot></Forgot>,
  },
  {
    path: '/recovery/:_id',
    component: <Recovery></Recovery>,
  },
  {
    path: '/reset/:_id',
    component: <Reset></Reset>,
  },

  {
    path: '/orders/:_id',
    component: (
      <AuthorizedUser>
        <Orders></Orders>
      </AuthorizedUser>
    ),
  },
  {
    path: '/orders/detail/:_orderid',
    component: <OrderDetailProducts></OrderDetailProducts>,
  },
  {
    path: '/account/changePassword/:_id',
    component: (
      <AuthorizedUser>
        <ChangePassword></ChangePassword>
      </AuthorizedUser>
    ),
  },
];
export { publicRoutes };

const adminRoutes = [
  { path: '*', component: <NotFound />, layout: null },
  {
    path: '/homeAdmin',
    component: <HomeAdmin />,
  },
];
export { adminRoutes };
