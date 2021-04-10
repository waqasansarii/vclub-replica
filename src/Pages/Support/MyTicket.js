import React from "react";
import AccountsTable from "../../Components/Table/AccountsTable";
import { Navbar } from "../../layout/navbar/navba";
import { useHistory, useParams } from "react-router-dom";
import "./Support.css";
const MyTicket = () => {
  const history = useHistory();
  let { id } = useParams();
// console.log(id)
  return (
    <React.Fragment>
      <Navbar />
      <div className="account_container">
        <div className="container">
          <div className="support-button"></div>
          <div className="row_sample">
            <div className="row"></div>
          </div>
          <div className="sup_main d-flex align-items-start">
            <div className="well sup_well">
              <h6 className="fs-6">Support</h6>
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-mytickets-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-mytickets"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-mytickets"
                  aria-selected="true"
                  onClick={()=>history.push('/support/my-ticket')}
                >
                  My tickets
                </button>
                <button
                  className="nav-link"
                  id="v-pills-newticket-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-newticket"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-newticket"
                  aria-selected="false"
                  onClick={()=>history.push('/support/create-ticket')}

                >
                  New ticket
                </button>
                <button
                  className="nav-link"
                  id="v-pills-help-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-help"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-help"
                  aria-selected="false"
                >
                  help
                </button>
              </div>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
             {id==='my-ticket'?
              <div
              className="tab-pane fade show active"
              // id="v-pills-mytickets"
              role="tabpanel"
              aria-labelledby="v-pills-mytickets-tab"
              >
                <div className="dsa">
                  <div className="well">
                    <AccountsTable myTicketTable="show1" />
                  </div>
                </div>
              </div>
              :
              
            
            id === "create-ticket" ? 
              // <div
              // className="tab-pane fade"
              // id="v-pills-newticket"
              // role="tabpanel"
              // aria-labelledby="v-pills-newticket-tab"
              // >
                  <div className="dsa">
                    <div id="submitForm" className="well">
                      <form
                        className
                        id="verticalForm"
                        action="/su"
                        method="post"
                      >
                        <input
                          type="hidden"
                          defaultValue="MWZqZFI2M0JuR0xfdmpUR2RaZGRWRGQzb2FMX05ZbGyeW2ne4rUPeS09Rjk5Oqs2xPPD29dipCtFWv4MUlVk1Q=="
                          name="YII_CSRF_TOKEN"
                        />
                        <div className="control-group">
                          <label
                            className="control-label required"
                            htmlFor="newTicket_subject"
                          >
                            Subject <span className="required">*</span>
                          </label>
                          <div className="controls">
                            <input
                              className="form-control"
                              name="newTicket[subject]"
                              id="newTicket_subject"
                              type="text"
                              maxLength={20}
                            />
                          </div>
                        </div>
                        <div className="control-group">
                          <label
                            className="control-label required"
                            htmlFor="newTicket_department"
                          >
                            Department <span className="required">*</span>
                          </label>
                          <div className="controls">
                            <select
                              className="form-control"
                              name="newTicket[department]"
                              id="newTicket_department"
                            >
                              <option value>--- Select department ---</option>
                              <option value={2}>Preoder BIN or CC</option>
                              <option value={4}>Refunds &amp; Dead CC</option>
                              <option value={5}>
                                Bitcoin &amp; Topup Problems
                              </option>
                              <option value={6}>
                                Technical Support Department
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="control-group">
                          <label
                            className="control-label"
                            htmlFor="newTicket_message"
                          >
                            Your message
                          </label>
                          <div className="controls">
                            <textarea
                              className="form-control"
                              rows={5}
                              name="newTicket[message]"
                              id="newTicket_message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="form-actions mt-4">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            name="yt0"
                          >
                            Create ticket
                          </button>
                          <button className="btn" type="reset" name="yt1">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                 : null}
              </div>
              <div
                className="tab-pane fade"
                // id="v-pills-help"
                role="tabpanel"
                aria-labelledby="v-pills-help-tab"
              >
                ...
              </div>
            </div>
          </div>
          <div className="invite-button"></div>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default MyTicket;
