import React from "react";
import "../Style/style.css";
const AccountsTable = ({orderTable,baData,min,max}) => {
  // let date = new Date();
  // let getDate = date.toISOString();
  // let slice = getDate.slice(0, 10) + " " + getDate.slice(11, 19);

  return (
    <div className="mb_tb_view mb_tb_n">
      <table className="accounts_table">
        <thead>
          {orderTable === "baShow" ? (
            <tr>
              <th className="text_lightblue">Database</th>
              <th className="text_lightblue">Account Description</th>
              <th className="text_lightblue">Data Type</th>
              <th className="text_lightblue">Price</th>
              <th className="text_gray">Buy</th>
            </tr>
          ) : orderTable === "Oashow" ? (
            <tr>
              <th style={{ width: "150px" }} className="text_lightblue">
                Database
              </th>
              <th style={{ width: "200px" }} className="text_lightblue">
                Created
              </th>
              <th style={{ width: "200px" }} className="text_gray">
                Quantity
              </th>
              <th style={{ width: "250px" }} className="text_gray">
                Total Price
              </th>
            </tr>
          ) : (
            <tr>
              <th style={{ width: "150px" }} className="text_lightblue">
                Subject
              </th>
              <th style={{ width: "180px" }} className="text_gray">
                DEPARTMENT
              </th>
              <th style={{ width: "180px" }} className="text_lightblue">
                Status
              </th>
              <th style={{ width: "250px" }} className="text_gray">
                Answered
              </th>
              <th style={{ width: "180px" }} className="text_lightblue">
                DATE
              </th>
            </tr>
          )}
        </thead>
        {orderTable === "baShow" ? (
          <tbody>
            {baData.length && baData.slice(min,min+max).map((val,i)=>(

              <tr className={`${val.className} text_gray`}>
              <td>{val.database}</td>
              <td>{val.account_description}</td>
              <td>{val.dataType}</td>
              <td>{val.price}</td>
              <td style={{width:"150px"}}><button className="btn btn-default">BUY IT NOW</button></td>
            </tr>
              ))}
          </tbody>
        ) :orderTable === "Oashow" ? (
          <tbody>
            <tr className="odd text_gray">
              <td colspan="4">You not have any orders</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr className="odd text_gray">
              <td colspan="5">You not have any orders</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default AccountsTable;
