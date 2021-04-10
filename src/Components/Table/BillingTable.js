import React from "react";
import "../Style/style.css";
const BillingTable = () => {
  let date = new Date();
  let getDate = date.toISOString();
  let slice = getDate.slice(0, 10) + " " + getDate.slice(11, 19);
  return (
    <React.Fragment>
      <table className="billing_table">
        <thead>
          <tr className="text_gray">
            <th>CODE</th>
            <th>METHOD</th>
            <th>MEMO</th>
            <th>CREATED</th>
            <th>PAYED</th>
            <th>FEE</th>
            <th>AMOUNT</th>
            <th>PAY</th>
            <th>BEFORE</th>
            <th>AFTER</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd text_gray">
            <td>7876UDT</td>
            <td>CCS Checker</td>
            <td>Checking .4214020052170513</td>
            <td>{slice}</td>
            <td>{slice}</td>
            <td>0.00%</td>
            <td>$-0.50</td>
            <td>$-0.50</td>
            <td>$1.32</td>
            <td>$0.82</td>
            <td>Paid</td>
          </tr>
          <tr className="even text_gray">
          <td>7876UDT</td>
            <td>CCS Checker</td>
            <td>Checking .4214020052170513</td>
            <td>{slice}</td>
            <td>{slice}</td>
            <td>0.00%</td>
            <td>$-0.50</td>
            <td>$-0.50</td>
            <td>$1.32</td>
            <td>$0.82</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default BillingTable;
