import React, { useState } from "react";
import CcsTable from "../../Components/ccs_Comp/CcsTable";
import { Navbar } from "../../layout/navbar/navba";
import "./style.css";

const table_data = {
  head: ["CODE", " CREATED ", " QUANTITY ", " TOTAL PRICE "],
  body: [
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " a ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " b ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " d ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " e ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " t ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "odd",
    },
    {
      check: ". ",
      code: " 12 ",
      create: " henry ",
      quantity: " 3 ",
      price: " $29 ",
      className: "even",
    },
  ],
};

const Ccs_Order = () => {
  const [rowsPerPage, setPages] = useState(5);
  const [index, setIndex] = useState(0);
  const showPagination = () => {
    const total = Math.ceil(table_data.body.length / rowsPerPage);
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
      <div className="ccs_container">
        <div className="ccs_main_div">
          <div className="head_div">
            <h3>CCS orders:</h3>
          </div>
          <div className="pagination_div">
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
                        i + rowsPerPage >= table_data.body.length
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
          <div className="button_table_div">
            <button className="downLoad_btn">Download selected</button>
            <button className="downLoad_btn red">Delete selected</button>
            <div className="tableDiv">
              <CcsTable
                sliceMIn={index}
                sliceMax={rowsPerPage}
                head={table_data.head}
                checkBox={<input type="checkbox" />}
                body={table_data.body}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ccs_Order;
