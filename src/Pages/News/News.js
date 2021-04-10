import React, { useState } from "react";
import { Navbar } from "../../layout/navbar/navba";
import { Icon } from "@iconify/react";
import databaseIcon from "@iconify-icons/mdi/database";
import calendarPlus from "@iconify-icons/mdi/calendar-plus";
import { news_data } from "../../tableData/NewsData";
import chartBar from "@iconify-icons/mdi/chart-bar";

import "./News.css";
const News = () => {
  const [rowsPerPage, setPages] = useState(2);
  const [index, setIndex] = useState(0);
  const showPagination = () => {
    const total = Math.ceil(news_data.newsData.length / rowsPerPage);
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
      <div className="account_container news_container">
        <div className="container">
          <div className="support-button"></div>
          <div className="row_sample">
            <div className="row"></div>
          </div>
          <div className="invite-button"></div>
          <div className="row news_row">
            <div className=" col-md-8">
              <div className="panel-heading">
                <h3 className="panel-title">News:</h3>
              </div>
              <div className="well">
                <div id="yw1" className="list-view">
                  <div className="items">
                    {news_data.newsData
                      .slice(index, index + rowsPerPage)
                      .map((val, i) => (
                        <div className>
                          <h4 className="text-white fs-6">
                            <div
                              style={{
                                display: "inline-block",
                                fontSize: "12px",
                                color: "#adadad",
                                float: "right",
                              }}
                            >
                              {val.date}
                            </div>
                            CC UPDATE/ОБНОВЛЕНИЕ СС
                          </h4>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              <tr>
                                <td
                                  className="text_gray"
                                  style={{
                                    width: "50%",
                                    verticalAlign: "top",
                                    paddingRight: "25px",
                                  }}
                                >
                                  <div style={{ fontSize: "13px" }}>
                                    <Icon
                                      icon={databaseIcon}
                                      style={{
                                        fontSize: "20px",
                                        margin: "0 7px 7px 0",
                                        color: "#ddd",
                                      }}
                                    />
                                    <span>Database name:</span>
                                    <br />
                                    <a
                                      href="#"
                                      style={{
                                        color: "#2a9fd6",
                                        paddingLeft: "5px",
                                      }}
                                    >
                                      <strong>{val.dbName}</strong>
                                    </a>
                                    <br />
                                    <Icon
                                      icon={chartBar}
                                      style={{
                                        fontSize: "20px",
                                        margin: "0 7px 7px 0",
                                        color: "#ddd",
                                      }}
                                    />
                                    Validrate: <strong>{val.validRate}</strong>
                                    <br />
                                    <Icon
                                      icon={calendarPlus}
                                      style={{
                                        fontSize: "20px",
                                        margin: "0 7px 7px 0",
                                        color: "#ddd",
                                      }}
                                    />
                                    Updated at:
                                    <strong>{val.updateAt}</strong>
                                  </div>
                                </td>
                                <td
                                  className="text_gray"
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: "14px",
                                  }}
                                >
                                  <i
                                    className="fa fa-retweet"
                                    aria-hidden="true"
                                    style={{
                                      fontSize: "16px",
                                      margin: "0 7px 7px 0",
                                      color: "#ddd",
                                    }}
                                  />
                                  {/* <i class="flag flag-mx"></i> */}
                                  Refundable: {val.refund}
                                  <br />
                                  <i
                                    className="fa fa-flag"
                                    aria-hidden="true"
                                    style={{
                                      fontSize: "16px",
                                      margin: "0 7px 7px 0",
                                      color: "#ddd",
                                    }}
                                  />
                                  Country list: {val.flag} &nbsp;&nbsp;
                                  {val.flag1}
                                  {/* <i title="MEXICO" className="flag flag-mx" />
                              &nbsp;&nbsp;
                              <i title="GERMANY" className="flag flag-de" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED KINGDOM"
                                className="flag flag-gb"
                                /> */}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div>
                            <p
                              style={{ textAlign: "center", color: "#ff6600" }}
                            >
                              {val.cards}
                            </p>
                          </div>
                          <hr />
                        </div>
                      ))}

                    <div className>
                      <h4>
                        <div
                          style={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#adadad",
                            float: "right",
                          }}
                        >
                          April 07, 2021 14:53 (Today)
                        </div>
                        CC UPDATE/ОБНОВЛЕНИЕ СС
                      </h4>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td
                              className="text_gray"
                              style={{
                                width: "50%",
                                verticalAlign: "top",
                                paddingRight: "25px",
                              }}
                            >
                              <div style={{ fontSize: "13px" }}>
                                <Icon
                                  icon={databaseIcon}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                <span>Database name:</span>
                                <br />
                                <a
                                  href="#"
                                  style={{
                                    color: "#2a9fd6",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  <strong>
                                    Arp#USA/MIX_FULLZ_(WAY)_[Spam/IP/SSN/DOB/Localbase]
                                  </strong>
                                </a>
                                <br />
                                <Icon
                                  icon={chartBar}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Validrate: <strong>68%</strong>
                                <br />
                                <Icon
                                  icon={calendarPlus}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Updated at: <strong>2021-04-07 14:53:20</strong>
                              </div>
                            </td>
                            <td
                              style={{ verticalAlign: "top", fontSize: "14px" }}
                            >
                              <i
                                className="fa fa-retweet"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              Refundable: NO
                              <br />
                              <i
                                className="fa fa-flag"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              <span>Country list:</span>
                              <i title="SWEDEN" className="flag flag-se" />
                              &nbsp;&nbsp;
                              <i title="GREECE" className="flag flag-gr" />
                              &nbsp;&nbsp;
                              <i title="ARGENTINA" className="flag flag-ar" />
                              &nbsp;&nbsp;
                              <i
                                title="SAUDI ARABIA"
                                className="flag flag-sa"
                              />
                              &nbsp;&nbsp;
                              <i title="TURKEY" className="flag flag-tr" />
                              &nbsp;&nbsp;
                              <i title="GERMANY" className="flag flag-de" />
                              &nbsp;&nbsp;
                              <i
                                title="SAINT KITTS AND NEVIS"
                                className="flag flag-kn"
                              />
                              &nbsp;&nbsp;
                              <i title="ZIMBABWE" className="flag flag-zw" />
                              &nbsp;&nbsp;
                              <i title="CANADA" className="flag flag-ca" />
                              &nbsp;&nbsp;
                              <i title="VENEZUELA" className="flag flag-ve" />
                              &nbsp;&nbsp;
                              <i title="JAMAICA" className="flag flag-jm" />
                              &nbsp;&nbsp;
                              <i title="BANGLADESH" className="flag flag-bd" />
                              &nbsp;&nbsp;
                              <i title="COLOMBIA" className="flag flag-co" />
                              &nbsp;&nbsp;
                              <i title="INDIA" className="flag flag-in" />
                              &nbsp;&nbsp;
                              <i title="IRELAND" className="flag flag-ie" />
                              &nbsp;&nbsp;
                              <i title="AUSTRIA" className="flag flag-at" />
                              &nbsp;&nbsp;
                              <i title="AUSTRALIA" className="flag flag-au" />
                              &nbsp;&nbsp;
                              <i title="NIGERIA" className="flag flag-ng" />
                              &nbsp;&nbsp;
                              <i title="MEXICO" className="flag flag-mx" />
                              &nbsp;&nbsp;
                              <i title="FRANCE" className="flag flag-fr" />
                              &nbsp;&nbsp;
                              <i title="SINGAPORE" className="flag flag-sg" />
                              &nbsp;&nbsp;
                              <i title="BELGIUM" className="flag flag-be" />
                              &nbsp;&nbsp;
                              <i title="DENMARK" className="flag flag-dk" />
                              &nbsp;&nbsp;
                              <i title="SLOVENIA" className="flag flag-si" />
                              &nbsp;&nbsp;
                              <i title="THAILAND" className="flag flag-th" />
                              &nbsp;&nbsp;
                              <i
                                title="BOSNIA AND HERZEGOVINA"
                                className="flag flag-ba"
                              />
                              &nbsp;&nbsp;
                              <i title="LITHUANIA" className="flag flag-it" />
                              &nbsp;&nbsp;
                              <i title="NORWAY" className="flag flag-no" />
                              &nbsp;&nbsp;
                              <i title="MONGOLIA" className="flag flag-mn" />
                              &nbsp;&nbsp;
                              <i title="CROATIA" className="flag flag-hr" />
                              &nbsp;&nbsp;
                              <i title="SERBIA" className="flag flag-rs" />
                              &nbsp;&nbsp;
                              <i title="BRAZIL" className="flag flag-br" />
                              &nbsp;&nbsp;
                              <i title="MALAYSIA" className="flag flag-my" />
                              &nbsp;&nbsp;
                              <i title="PUERTO RICO" className="flag flag-pr" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED KINGDOM"
                                className="flag flag-gb"
                              />
                              &nbsp;&nbsp;
                              <i title="ITALY" className="flag flag-it" />
                              &nbsp;&nbsp;
                              <i title="ROMANIA" className="flag flag-ro" />
                              &nbsp;&nbsp;
                              <i title="GUAM" className="flag flag-gu" />
                              &nbsp;&nbsp;
                              <i title="MAURITIUS" className="flag flag-mu" />
                              &nbsp;&nbsp;
                              <i title="PHILIPPINES" className="flag flag-ph" />
                              &nbsp;&nbsp;
                              <i title="PORTUGAL" className="flag flag-pt" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED STATES"
                                className="flag flag-us"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <p style={{ textAlign: "center", color: "#ff6600" }}>
                          25 FRESH HQ SNIFFED CARDS ADDED
                        </p>
                      </div>
                      <hr />
                    </div>

                    <div className>
                      <h4 className="text-white fs-6">
                        <div
                          style={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#adadad",
                            float: "right",
                          }}
                        >
                          April 07, 2021 15:46 (Today)
                        </div>
                        CC UPDATE/ОБНОВЛЕНИЕ СС
                      </h4>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td
                              className="text_gray"
                              style={{
                                width: "50%",
                                verticalAlign: "top",
                                paddingRight: "25px",
                              }}
                            >
                              <div style={{ fontSize: "13px" }}>
                                <Icon
                                  icon={databaseIcon}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                <span>Database name:</span>
                                <br />
                                <a
                                  href="#"
                                  style={{
                                    color: "#2a9fd6",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  <strong>
                                    Apr#SALE_UK_(Ametist)_[SPAM/MMN/DOB/AccountNumber/SortCode/IP/LocalBase]
                                  </strong>
                                </a>
                                <br />
                                <Icon
                                  icon={chartBar}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Validrate: <strong>64%</strong>
                                <br />
                                <Icon
                                  icon={calendarPlus}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Updated at:
                                <strong>2021-04-07 15:46:56</strong>
                              </div>
                            </td>
                            <td
                              className="text_gray"
                              style={{ verticalAlign: "top", fontSize: "14px" }}
                            >
                              <i
                                className="fa fa-retweet"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              {/* <i class="flag flag-mx"></i> */}
                              Refundable: NO
                              <br />
                              <i
                                className="fa fa-flag"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              Country list:
                              <i title="MEXICO" className="flag flag-mx" />
                              &nbsp;&nbsp;
                              <i title="GERMANY" className="flag flag-de" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED KINGDOM"
                                className="flag flag-gb"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <p style={{ textAlign: "center", color: "#ff6600" }}>
                          39 FRESH HQ SNIFFED CARDS ADDED
                        </p>
                      </div>
                      <hr />
                    </div>

                    <div className>
                      <h4>
                        <div
                          style={{
                            display: "inline-block",
                            fontSize: "12px",
                            color: "#adadad",
                            float: "right",
                          }}
                        >
                          April 07, 2021 14:53 (Today)
                        </div>
                        CC UPDATE/ОБНОВЛЕНИЕ СС
                      </h4>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td
                              className="text_gray"
                              style={{
                                width: "50%",
                                verticalAlign: "top",
                                paddingRight: "25px",
                              }}
                            >
                              <div style={{ fontSize: "13px" }}>
                                <Icon
                                  icon={databaseIcon}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                <span>Database name:</span>
                                <br />
                                <a
                                  href="#"
                                  style={{
                                    color: "#2a9fd6",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  <strong>
                                    Arp#USA/MIX_FULLZ_(WAY)_[Spam/IP/SSN/DOB/Localbase]
                                  </strong>
                                </a>
                                <br />
                                <Icon
                                  icon={chartBar}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Validrate: <strong>68%</strong>
                                <br />
                                <Icon
                                  icon={calendarPlus}
                                  style={{
                                    fontSize: "20px",
                                    margin: "0 7px 7px 0",
                                    color: "#ddd",
                                  }}
                                />
                                Updated at: <strong>2021-04-07 14:53:20</strong>
                              </div>
                            </td>
                            <td
                              style={{ verticalAlign: "top", fontSize: "14px" }}
                            >
                              <i
                                className="fa fa-retweet"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              Refundable: NO
                              <br />
                              <i
                                className="fa fa-flag"
                                aria-hidden="true"
                                style={{
                                  fontSize: "16px",
                                  margin: "0 7px 7px 0",
                                  color: "#ddd",
                                }}
                              />
                              <span>Country list:</span>
                              <i title="SWEDEN" className="flag flag-se" />
                              &nbsp;&nbsp;
                              <i title="GREECE" className="flag flag-gr" />
                              &nbsp;&nbsp;
                              <i title="ARGENTINA" className="flag flag-ar" />
                              &nbsp;&nbsp;
                              <i
                                title="SAUDI ARABIA"
                                className="flag flag-sa"
                              />
                              &nbsp;&nbsp;
                              <i title="TURKEY" className="flag flag-tr" />
                              &nbsp;&nbsp;
                              <i title="GERMANY" className="flag flag-de" />
                              &nbsp;&nbsp;
                              <i
                                title="SAINT KITTS AND NEVIS"
                                className="flag flag-kn"
                              />
                              &nbsp;&nbsp;
                              <i title="ZIMBABWE" className="flag flag-zw" />
                              &nbsp;&nbsp;
                              <i title="CANADA" className="flag flag-ca" />
                              &nbsp;&nbsp;
                              <i title="VENEZUELA" className="flag flag-ve" />
                              &nbsp;&nbsp;
                              <i title="JAMAICA" className="flag flag-jm" />
                              &nbsp;&nbsp;
                              <i title="BANGLADESH" className="flag flag-bd" />
                              &nbsp;&nbsp;
                              <i title="COLOMBIA" className="flag flag-co" />
                              &nbsp;&nbsp;
                              <i title="INDIA" className="flag flag-in" />
                              &nbsp;&nbsp;
                              <i title="IRELAND" className="flag flag-ie" />
                              &nbsp;&nbsp;
                              <i title="AUSTRIA" className="flag flag-at" />
                              &nbsp;&nbsp;
                              <i title="AUSTRALIA" className="flag flag-au" />
                              &nbsp;&nbsp;
                              <i title="NIGERIA" className="flag flag-ng" />
                              &nbsp;&nbsp;
                              <i title="MEXICO" className="flag flag-mx" />
                              &nbsp;&nbsp;
                              <i title="FRANCE" className="flag flag-fr" />
                              &nbsp;&nbsp;
                              <i title="SINGAPORE" className="flag flag-sg" />
                              &nbsp;&nbsp;
                              <i title="BELGIUM" className="flag flag-be" />
                              &nbsp;&nbsp;
                              <i title="DENMARK" className="flag flag-dk" />
                              &nbsp;&nbsp;
                              <i title="SLOVENIA" className="flag flag-si" />
                              &nbsp;&nbsp;
                              <i title="THAILAND" className="flag flag-th" />
                              &nbsp;&nbsp;
                              <i
                                title="BOSNIA AND HERZEGOVINA"
                                className="flag flag-ba"
                              />
                              &nbsp;&nbsp;
                              <i title="LITHUANIA" className="flag flag-it" />
                              &nbsp;&nbsp;
                              <i title="NORWAY" className="flag flag-no" />
                              &nbsp;&nbsp;
                              <i title="MONGOLIA" className="flag flag-mn" />
                              &nbsp;&nbsp;
                              <i title="CROATIA" className="flag flag-hr" />
                              &nbsp;&nbsp;
                              <i title="SERBIA" className="flag flag-rs" />
                              &nbsp;&nbsp;
                              <i title="BRAZIL" className="flag flag-br" />
                              &nbsp;&nbsp;
                              <i title="MALAYSIA" className="flag flag-my" />
                              &nbsp;&nbsp;
                              <i title="PUERTO RICO" className="flag flag-pr" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED KINGDOM"
                                className="flag flag-gb"
                              />
                              &nbsp;&nbsp;
                              <i title="ITALY" className="flag flag-it" />
                              &nbsp;&nbsp;
                              <i title="ROMANIA" className="flag flag-ro" />
                              &nbsp;&nbsp;
                              <i title="GUAM" className="flag flag-gu" />
                              &nbsp;&nbsp;
                              <i title="MAURITIUS" className="flag flag-mu" />
                              &nbsp;&nbsp;
                              <i title="PHILIPPINES" className="flag flag-ph" />
                              &nbsp;&nbsp;
                              <i title="PORTUGAL" className="flag flag-pt" />
                              &nbsp;&nbsp;
                              <i
                                title="UNITED STATES"
                                className="flag flag-us"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <p style={{ textAlign: "center", color: "#ff6600" }}>
                          25 FRESH HQ SNIFFED CARDS ADDED
                        </p>
                      </div>
                      <hr />
                    </div>
                  </div>
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
                                i + rowsPerPage >=
                                news_data.newsData.length
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
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel-heading">
                <h3 className="panel-title text-white">Main info </h3>
              </div>
              <div className="well">
                <h6>
                  <span style={{ color: "#ff9900", fontSize: "12px" }}>
                    <strong>Shop Telegram Bot</strong>
                  </span>
                </h6>
                <h6>
                  <a
                    style={{
                      boxSizing: "border-box",
                      background: "transparent",
                      color: "#2a9fd6",
                      textDecorationLine: "none",
                      outline: "0px",
                      fontFamily:
                        '"Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                    href="https://t.me/Vclubshop_Bot"
                    target="_blank"
                  >
                    <img
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        verticalAlign: "middle",
                      }}
                      src="https://vclub.tel/images/telegram.svg"
                      alt="Connect to our telegram bot"
                      width={32}
                      height={32}
                    />
                    &nbsp;
                  </a>
                  <span style={{ textAlign: "center", fontSize: "12px" }}>
                    &nbsp;
                  </span>
                  <a
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#2a9fd6",
                    }}
                    href="https://t.me/Vclubshop_Bot"
                    target="_blank"
                  >
                    Telegram Bot
                  </a>
                </h6>
                <h6>
                  <span style={{ color: "#ff9900", fontSize: "12px" }}>
                    <strong>&nbsp;Tor links</strong>
                  </span>
                </h6>
                <h6 style={{ fontSize: "12px", color: "#ffffff" }}>
                  Domain (tor) #1
                  <a href="#" className="ms-2 text_lightblue">
                    ccvclubsqlef6q3f.onion/
                  </a>
                </h6>
                <h6 style={{ fontSize: "12px", color: "#ffffff" }}>
                  <br />
                  Domain (tor) #2
                  <a href="#" className="ms-2 text_lightblue">
                    ccvclubsxbgnn4pk.onion/
                  </a>
                </h6>
                <h6>
                  <span style={{ color: "#ff9900", fontSize: "12px" }}>
                    <strong>Normal https Link:</strong>
                  </span>
                </h6>
                <h6>
                  <a
                    className="text_lightblue"
                    style={{ fontSize: "12px" }}
                    href="#"
                  >
                    Vclubshop.ru
                  </a>
                </h6>
                <h6>
                  <span style={{ color: "#ff9900", fontSize: "12px" }}>
                    <strong>Blockchain domain:</strong>
                  </span>
                </h6>
                <p>
                  <a
                    className="text_lightblue"
                    style={{ fontSize: "12px" }}
                    href="#"
                  >
                    http://vclub.lib/
                  </a>
                </p>
                <h6
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 10px",
                    color: "#888888",
                    fontFamily:
                      '"Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: "14px",
                    backgroundColor: "#151515",
                  }}
                >
                  <strong style={{ boxSizing: "border-box" }}>
                    To surf blockchain domains install one of these browser
                    extensions:
                  </strong>
                </h6>
                <ul
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                    color: "#888888",
                    fontFamily:
                      '"Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: "14px",
                    backgroundColor: "#151515",
                  }}
                >
                  <li style={{ boxSizing: "border-box" }}>
                    <h6 style={{ fontSize: "12px" }}>
                      <strong style={{ boxSizing: "border-box" }}>
                        <a
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            color: "#2a9fd6",
                            textDecorationLine: "none",
                          }}
                          href="https://blockchain-dns.info/"
                          target="_blank"
                          rel="noopener"
                        >
                          Blockchain-DNS
                        </a>
                        &nbsp;is the preferred choice, available for&nbsp;
                        <a
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            color: "#2a9fd6",
                            textDecorationLine: "none",
                          }}
                          href="https://chrome.google.com/webstore/detail/blockchain-dns/hlnmiaddfabbklljanmdilbngnookdgn"
                          target="_blank"
                          rel="noopener"
                        >
                          Chrome
                        </a>
                        &nbsp;and&nbsp;
                        <a
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            color: "#2a9fd6",
                            textDecorationLine: "none",
                          }}
                          href="https://addons.mozilla.org/en-US/firefox/addon/b-dns/"
                          target="_blank"
                          rel="noopener"
                        >
                          Firefox
                        </a>
                      </strong>
                    </h6>
                  </li>
                  <li style={{ boxSizing: "border-box" }}>
                    <h6 style={{ fontSize: "12px" }}>
                      <strong style={{ boxSizing: "border-box" }}>
                        <a
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            color: "#2a9fd6",
                            textDecorationLine: "none",
                          }}
                          href="https://fri-gate.org/"
                          target="_blank"
                          rel="noopener"
                        >
                          friGate CDN
                        </a>
                        &nbsp;- an alternative
                      </strong>
                    </h6>
                  </li>
                  <li style={{ boxSizing: "border-box", textAlign: "center" }}>
                    <h6 style={{ textAlign: "left", fontSize: "12px" }}>
                      <strong style={{ boxSizing: "border-box" }}>
                        <a
                          style={{
                            boxSizing: "border-box",
                            background: "transparent",
                            color: "#2a9fd6",
                            textDecorationLine: "none",
                          }}
                          href="https://peername.com/browser-extension/"
                          target="_blank"
                          rel="noopener"
                        >
                          PeerName
                        </a>
                        &nbsp;– another alternative
                      </strong>
                    </h6>
                    <strong>
                      <span style={{ color: "#ff0000" }}>
                        <a href="../../content/?view=sell_your_stuff">
                          <span style={{ color: "#ff0000" }}>
                            <br />
                          </span>
                        </a>
                      </span>
                    </strong>
                  </li>
                </ul>
                <p>
                  <strong>
                    <span style={{ color: "#ff0000" }}>
                      <span style={{ color: "#ff0000" }}>
                        You have ccs/fulls for sell ? Join our team
                      </span>
                    </span>
                  </strong>
                </p>
                <p>
                  <strong>
                    <span style={{ color: "#ff0000" }}>
                      <span style={{ color: "#ff0000" }}>
                        Jabber:&nbsp; &nbsp;
                        <span style={{ color: "#00ff00" }}>
                          support@valid.support
                        </span>
                        &nbsp;
                      </span>
                    </span>
                  </strong>
                </p>
                <p>
                  <strong>
                    <span style={{ color: "#ff0000" }}>
                      Jabber:&nbsp; &nbsp;
                      <span style={{ color: "#00ff00" }}>
                        support2@valid.support
                      </span>
                      &nbsp;
                    </span>
                  </strong>
                </p>
              </div>
              <div className="panel-heading">
                <h3 className="panel-title text-white">Gold bases</h3>
              </div>
              <div
                className="well"
                style={{ overflow: "hidden", fontSize: "14px" }}
              >
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4047"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA/MIX_(OLDFRIEND)_[Sniffed/IP/Localbase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4083"
                  style={{ color: "#ff9900" }}
                >
                  Apr#AU/EU_(ELITE)_[Sniffed/HaveIP/Localbase] (DAILY UPDATE, NO
                  REF)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4084"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA_(FRESHGINIUS)_[Sniffed/HaveIP/LocalBase] (Daily
                  Updates,No ref)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4392"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA_(CREDITAIRLINES)_[Sniffed/HaveIP/LocalBase] (Daily
                  Updates) ✈
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4654"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA/WMIX_(ASEDEBILYA)_[Sniffed/HaveIP/LocalBase] (Daily
                  Updates)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4687"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA_(SWEETBUBA)_[Sniffed/IP/Localbase] (Daily Updates)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4727"
                  style={{ color: "#ff9900" }}
                >
                  Apr#GERMANY/EU/WORLD_(GUCCI)_[Firsthand/IP/Localbase] (Daily
                  UPDATES)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=4851"
                  style={{ color: "#ff9900" }}
                >
                  Apr#CANADA_[Sniffed/Localbase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5029"
                  style={{ color: "#ff9900" }}
                >
                  SALE#US/MIX_(SALEMUSK)_[Sniffed/Localbase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5057"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA_(Dolores)_[Sniffed/Localbase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5087"
                  style={{ color: "#ff9900" }}
                >
                  Apr#HighMIX_(VENUS)_[Sniffed/Localbase] (Daily UPDATES)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5381"
                  style={{ color: "#ff9900" }}
                >
                  Apr#AU/US/NZ/CA_[FirstHand/Sniffed/HaveIP] (No ref)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5507"
                  style={{ color: "#ff9900" }}
                >
                  Apr#UK_(NEWGEN)_[Sniffed/Firsthand]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5517"
                  style={{ color: "#ff9900" }}
                >
                  Apr#SALE_UK_(Ametist)_[SPAM/MMN/DOB/AccountNumber/SortCode/IP/LocalBase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5527"
                  style={{ color: "#ff9900" }}
                >
                  Apr#ITALY_[SPAM/DOB/EMAIL/MaybePASS/Firsthand]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5540"
                  style={{ color: "#ff9900" }}
                >
                  Apr#UK_DOB_MMN_Accnum_Sortcode_(Millers)_[Spam/Firsthand] (No
                  refund)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5588"
                  style={{ color: "#ff9900" }}
                >
                  Apr#EU+US+CA_MIX_(Firefox)_[Sniffed/Localbase] (Daily UPDATE)
                  NO REFUND
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5592"
                  style={{ color: "#ff9900" }}
                >
                  Apr#FRANCE_[Sniffed/Firsthand] (No refund)
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5638"
                  style={{ color: "#ff9900" }}
                >
                  Apr#CANADA_[Spam/DOB/MMN/IP/Firsthand]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5659"
                  style={{ color: "#ff9900" }}
                >
                  Apr#USA_(Effective)_[Sniffed/Localbase]
                </a>
                <br />
                <i className="fa fa-fire" />
                <a
                  href="/shop/ccs?Search[base_id][]=5690"
                  style={{ color: "#ff9900" }}
                >
                  Apr#Canada_(MA2)_[Spam/MMN/DOB/Firsthand] (No ref)
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default News;
