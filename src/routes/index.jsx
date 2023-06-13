import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import Cart from "../Pages/Cart";
import PaymentInfo from "../Pages/Payment/PaymentInfo";
import PaymentFinish from "../Pages/Payment/PaymentFinish";
import Blog from "../Pages/Blog/Blog";
import ProductsPage from "../Pages/Products/Screens/ProductsPage";
import ProductsPage1 from "../Pages/Products/Screens/ProductsPage1";
import ProductsPage2 from "../Pages/Products/Screens/ProductsPage2";
import ProductsDetail from "../Pages/Products/Components/ProductDetail";
import SearchProducts from "../Pages/SearchProduct/searchProduct";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Book from "../Pages/Book/Book";
import HomeAdmin from "../admin/pages/home/home_admin";

import Login from "../Pages/Login1/components/login.js";
import Account from "../Pages/Login1/components/profile.js";
import Register from "../Pages/Login1/components/register.js";
import Forgot from "../Pages/Login1/components/forgot";
import Reset from "../Pages/Login1/components/otpForgot";
import Orders from "../Pages/Orders/Orders.js";
import Recovery from "../Pages/Login1/components/recovery";
import {
  AuthorizedAdmin,
  AuthorizedUser,
  LoggedAdmin,
  LoggedUser,
} from "../Pages/Login1/authenticate";
import OrderDetailProducts from "../Pages/Orders/OrderDetailProduct";

import Service from "../admin/pages/service/service_admin";

import ViewService from "../admin/pages/service/viewService/viewService";
import AdjustService from "../admin/pages/service/adjustService/adjustService";
import AddTypeInService from "../admin/pages/service/viewService/add/add";
import WareHouse from "../admin/pages/Warehouse/warehouse_admin";

import ViewPayment from "../admin/pages/Payment/Screens/paymentDetails";
import VerifyOrder from "../admin/pages/orderVerification/orderVerification";
import ViewOrderVerification from "../admin/pages/orderVerification/viewOrderVerification/viewOrderVerification";
import ConfirmationNotification from "../admin/pages/verfiedPage";
import Hoadon from "../admin/pages/Hoadon";
import ChitietHoadon from "../admin/Components/ChitietHoadon";
import AdjustServiceType from "../admin/pages/service/adjustServiceType/adjustServiceType";
import VouchersPageAdmin from "../admin/pages/VouchersPage/Screens/vouchersPage";
import VouchersDetailsAdmin from "../admin/pages/VouchersPage/Screens/vouchersDetails";
import ProductsPageAdmin from "../admin/pages/ProductsPage/Screens/productsPage";
import ProductDetailsAdmin from "../admin/pages/ProductsPage/Screens/productDetails";
import AddProduct from "../admin/pages/ProductsPage/Screens/addProduct";
import EditProduct from "../admin/pages/ProductsPage/Screens/editProduct";
import AddVoucher from "../admin/pages/VouchersPage/Screens/addVoucher";
import EditVoucher from "../admin/pages/VouchersPage/Screens/editVoucher";
import AddVoucherProduct from "../admin/pages/VouchersPage/Screens/addProduct";
import EditVoucherProduct from "../admin/pages/VouchersPage/Screens/editProduct";
import AddServiceType from "../admin/pages/service/addServiceType/addServiceType";
import ChangePassword from "../Pages/Login1/components/changePassword";
import Users from "../admin/pages/users/user";
import ViewUser from "../admin/pages/users/viewUser";
import OrderView from "../admin/pages/users/OderView";
import ViewOrder from "../admin/pages/orderVerification/ViewOrder";
import ConfirmationServiceNotification from "../admin/pages/service/viewService/verifiedService";
import PaymentAdmin from "../admin/pages/Payment/Screens/paymentPage";
import LoginAdmin from "../admin/loginAdmin/LoginAdmin";
const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "*", component: <NotFound />, layout: null },
  {
    path: "/cart",
    component: (
      <AuthorizedUser>
        <Cart />
      </AuthorizedUser>
    ),
  },
  { path: "/paymentinfo", component: <PaymentInfo /> },
  { path: "/paymentfinish", component: <PaymentFinish /> },

  {
    path: "/blog",
    component: <Blog />,
  },
  { path: "/products/nhan", component: <ProductsPage /> },
  {
    path: "/products/bong-tai",
    component: <ProductsPage1 />,
  },
  {
    path: "/products/day-chuyen",
    component: <ProductsPage2 />,
  },
  {
    path: "/productsdetail/:id",
    component: <ProductsDetail />,
  },
  {
    path: "/search",
    component: <SearchProducts />,
  },
  {
    path: "/aboutus",
    component: <AboutUs />,
  },
  {
    path: "/book/:_id",
    component: (
      <AuthorizedUser>
        <Book></Book>
      </AuthorizedUser>
    ),
  },
  {
    path: "/login",
    component: (
      <LoggedUser>
        <Login></Login>
      </LoggedUser>
    ),
  },
  {
    path: "/register",
    component: <Register></Register>,
  },
  {
    path: "/account/:_id",
    component: (
      <AuthorizedUser>
        <Account></Account>
      </AuthorizedUser>
    ),
  },
  {
    path: "/forgot",
    component: <Forgot></Forgot>,
  },
  {
    path: "/recovery/:_id",
    component: <Recovery></Recovery>,
  },
  {
    path: "/reset/:_id",
    component: <Reset></Reset>,
  },

  {
    path: "/orders/:_id",
    component: (
      <AuthorizedUser>
        <Orders></Orders>
      </AuthorizedUser>
    ),
  },
  {
    path: "/orders/detail/:_orderid",
    component: <OrderDetailProducts></OrderDetailProducts>,
  },
  {
    path: "/account/changePassword/:_id",
    component: (
      <AuthorizedUser>
        <ChangePassword></ChangePassword>
      </AuthorizedUser>
    ),
  },
];
export { publicRoutes };

const adminRoutes = [
  { path: "*", component: <NotFound />, layout: null },
  {
    path: "/users",
    component: (
      <AuthorizedAdmin>
        <Users></Users>
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/users/:_id",
    component: (
      <AuthorizedAdmin>
        {" "}
        <ViewUser></ViewUser>
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/user/order/detail/:_orderid",
    component: (
      <AuthorizedAdmin>
        <OrderView></OrderView>
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/order/detail/:_orderid",
    component: (
      <AuthorizedAdmin>
        <ViewOrder></ViewOrder>
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/service",
    component: (
      <AuthorizedAdmin>
        <Service />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/service/addTypeInService",
    component: (
      <AuthorizedAdmin>
        <AddTypeInService />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "/service/view/:_id",
    component: (
      <AuthorizedAdmin>
        <ViewService />
      </AuthorizedAdmin>
    ),
  },
  // {
  //   path: "/serviceType/view/:svt_id",
  //   component: <ViewService />,
  // },
  {
    path: "/service/adjustService",
    component: (
      <AuthorizedAdmin>
        {" "}
        <AdjustService />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "/serviceType/addServiceType",
    component: (
      <AuthorizedAdmin>
        <AddServiceType />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/serviceType/adjustServiceType/:svt_id",
    component: (
      <AuthorizedAdmin>
        <AdjustServiceType />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/homeAdmin",
    component: (
      <AuthorizedAdmin>
        {" "}
        <HomeAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/loginAdmin",
    component: (
      <LoggedAdmin>
        {" "}
        <LoginAdmin />
      </LoggedAdmin>
    ),
  },
  {
    path: "/warehouse",
    component: (
      <AuthorizedAdmin>
        <WareHouse />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "admin/paymentPage",
    component: (
      <AuthorizedAdmin>
        <PaymentAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "admin/paymentPage/:id",
    component: (
      <AuthorizedAdmin>
        {" "}
        <ViewPayment />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/orderVerification",
    component: (
      <AuthorizedAdmin>
        <VerifyOrder />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/viewOrderVerification",
    component: (
      <AuthorizedAdmin>
        <ViewOrderVerification />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "/HoadonAdmin",
    component: (
      <AuthorizedAdmin>
        {" "}
        <Hoadon />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage",
    component: (
      <AuthorizedAdmin>
        <VouchersPageAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage/:id",
    component: (
      <AuthorizedAdmin>
        {" "}
        <VouchersDetailsAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage/:id/add",
    component: (
      <AuthorizedAdmin>
        {" "}
        <AddVoucherProduct />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage/:id/edit/:productId",
    component: (
      <AuthorizedAdmin>
        {" "}
        <EditVoucherProduct />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/productsPage",
    component: (
      <AuthorizedAdmin>
        <ProductsPageAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/productsPage/:id",
    component: (
      <AuthorizedAdmin>
        <ProductDetailsAdmin />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/productsPage/add",
    component: (
      <AuthorizedAdmin>
        <AddProduct />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/productsPage/edit/:id",
    component: (
      <AuthorizedAdmin>
        <EditProduct />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage/add",
    component: (
      <AuthorizedAdmin>
        <AddVoucher />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/admin/vouchersPage/edit/:id",
    component: (
      <AuthorizedAdmin>
        <EditVoucher />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "/ConfirmationNotification",
    component: (
      <AuthorizedAdmin>
        <ConfirmationNotification />
      </AuthorizedAdmin>
    ),
  },
  {
    path: "/veriedService",
    component: (
      <AuthorizedAdmin>
        <ConfirmationServiceNotification />
      </AuthorizedAdmin>
    ),
  },

  {
    path: "/ChitietHoadonAdmin/:mahd",
    component: (
      <AuthorizedAdmin>
        <ChitietHoadon />
      </AuthorizedAdmin>
    ),
  },
];
export { adminRoutes };
