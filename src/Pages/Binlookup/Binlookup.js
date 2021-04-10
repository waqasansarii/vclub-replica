import React from "react";
import { Navbar } from "../../layout/navbar/navba";
import "./Binlookup.css";

const Binlookup = () => {
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
            <div className="panel-heading bin_heading">
              <h3 class="panel-title">Operations:</h3>
              <span className="bin_label">
                <span className="label label-info">
                  (Search cost per bin: 0.02$)
                </span>
              </span>
            </div>

            <div className="well">
              <div className="form-floating">
                <textarea
                  className="form-control bin_textarea"
                  placeholder="Put your here bins..."
                  id="floatingTextarea2"
                  spellcheck="false"
                  style={{ height: "200px" }}
                  defaultValue={""}
                />
                <div className="pannel_button">
                  <button className="btn bins_button">Search my bins</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Binlookup;
