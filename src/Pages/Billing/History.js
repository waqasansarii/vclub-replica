import React from "react";
import BillingTable from "../../Components/Table/BillingTable";
import { Navbar } from "../../layout/navbar/navba";
import "./Billing.css";
const History = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="account_container">
        <div className="container">
          <div className="support-button"></div>
          <div className="row_sample">
            <div className="row"></div>
          </div>
          <div className="invite-button"></div>
          <div className="panel-default">
            <div className="panel-heading">
              <h3 class="panel-title">Operations:</h3>
            </div>
            <div className="well mb_tb_view">
              <BillingTable />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
