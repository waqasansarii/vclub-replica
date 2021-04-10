import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../layout/navbar/navba";
import BuyAccounts from "../Pages/Accounts/BuyAccounts";
import OrdersAccount from "../Pages/Accounts/OrdersAccount";
import History from "../Pages/Billing/History";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import "../App.css";
import Binlookup from "../Pages/Binlookup/Binlookup";
import News from "../Pages/News/News";
import MyTicket from "../Pages/Support/MyTicket";
import Profile from "../Pages/Profile/Profile";
import Validation from "../Pages/validationPage/validation";
import Ccs_Order from "../Pages/ccs/ccs_order";
import Order_dumps from "../Pages/dumps/order_dumps";
import CcsBuy from "../Pages/ccs/ccs_buy";
import BuyDumps from "../Pages/dumps/buy_dumps";
import SsnOrder from "../Pages/ssn_dob/ssn_order";
import SsnBuy from "../Pages/ssn_dob/ssn_buy";
import SockBuy from "../Pages/sock_5/sock_buy";
import Cart from "../Pages/ccs/cart";

const Routes = ({ validate }) => {
  // console.log(validate)
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Navbar /> */}
          <Route exact path="/buy-accounts">
            {!validate ? <BuyAccounts /> : <Redirect to='/validation' />}
            {/* <BuyAccounts /> */}
          </Route>
          <Route exact path="/order-accounts">
            {!validate ? <OrdersAccount /> : <Redirect to='/validation' />}
            {/* <OrdersAccount /> */}
          </Route>
          <Route exact path="/billing-history">
            {!validate ? <History /> : <Redirect to='/validation' />}
            {/* <History /> */}
          </Route>
          <Route exact path="/binlookup">
            {!validate ? <Binlookup /> : <Redirect to='/validation' />}
            {/* <Binlookup /> */}
          </Route>
          <Route exact path="/news">
            {!validate ? <News /> : <Redirect to='/validation' />}
            {/* <News /> */}
          </Route>
          <Route exact path="/support/:id">
            {!validate ? <MyTicket /> : <Redirect to='/validation' />}
            {/* <MyTicket /> */}
          </Route>
          <Route exact path="/profile">
            {!validate ? <Profile /> : <Redirect to='/validation' />}
            {/* <Profile /> */}
          </Route>
          <Route path="/validation" component={Validation} />
          <Route path="/order-ccs"
          //  component={Ccs_Order}
          >
            {!validate ? <Ccs_Order /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/order-dumps"
          // component={Order_dumps} 
          >
            {!validate ? <Order_dumps /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/ccs-buy"
          // component={CcsBuy} 
          >
            {!validate ? <CcsBuy /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/buy-dumps"
          // component={BuyDumps} 
          >
            {!validate ? <BuyDumps /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/order-ssn"
          // component={SsnOrder} 
          >
            {!validate ? <SsnOrder /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/buy-ssn"
            // component={SsnBuy}
          >
            {!validate ? <SsnBuy /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/sock-buy"
            // component={SockBuy}
          >
            {!validate ? <SockBuy /> : <Redirect to='/validation' />}
          </Route>
          <Route path="/cart/:id"
            // component={Cart}
          >
            {!validate ? <Cart /> : <Redirect to='/validation' />}
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;

