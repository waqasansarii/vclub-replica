import React, { useState } from "react";
import InviteModal from "../../Components/Modals/InviteModal";
import SuppoetModal from "../../Components/Modals/SuppoetModal";
import AccountsTable from "../../Components/Table/AccountsTable";
import { Navbar } from "../../layout/navbar/navba";
import { accounts_buy_table_data } from "../../table_data/data";
import "./Accounts.css";
const BuyAccounts = () => {
  const [rowsPerPage, setPages] = useState(9);
  const [index, setIndex] = useState(0);
  const showPagination = () => {
    const total = Math.ceil(accounts_buy_table_data.baData.length / rowsPerPage);
    const buttons = [];
    for (let i = 0; i < total; i++) {
      buttons.push(
        <li
          className={
            i * rowsPerPage === index ? "page-item active" : "page-item"
          }
        >
          <a
            onClick={() => setIndex(i * rowsPerPage)}
            className="page-link text-white bg-dark padd"
            href="#"
          >
            {i + 1}
          </a>
        </li>
      );
    }
    return buttons;
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="account_container">
        <div className="container">
          <SuppoetModal />
          <div className="row_sample">
            <div className="row"></div>
          </div>
          <h2 className="well text-white">Accounts:</h2>
          <InviteModal />
          <div className="pagination_div ccv_buy_pagination">
            <nav aria-label="Page navigation example text-white bg-dark">
              <ul className="pagination ">
                <li className="page-item text-white bg-dark">
                  <a
                    className="page-link text-white padd bg-dark"
                    onClick={() =>
                      setIndex((i) => (i <= 0 ? i : i - rowsPerPage))
                    }
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {showPagination()}
                <li className="page-item">
                  <a
                    className="page-link text-white padd bg-dark"
                    onClick={() =>
                      setIndex((i) =>
                        i + rowsPerPage >= accounts_buy_table_data.baData.length
                          ? i
                          : i + rowsPerPage
                      )
                    }
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <AccountsTable 
          orderTable="baShow" 
          baData={accounts_buy_table_data.baData} 
          min={index}
          max={rowsPerPage}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BuyAccounts;
