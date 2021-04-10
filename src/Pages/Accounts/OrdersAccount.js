import React from "react";
import AccountsTable from "../../Components/Table/AccountsTable";
import { Navbar } from "../../layout/navbar/navba";

const OrdersAccount = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="account_container">
        <div className="container">
          <div className="support-button"></div>
          <div className="row_sample">
            <div className="row"></div>
          </div>
          <h2 className="text-white">Accounts order:</h2>
          <div className="invite-button"></div>
          <div className="well">
            <AccountsTable orderTable="Oashow" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrdersAccount;
