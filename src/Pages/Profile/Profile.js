import React from "react";
import { Navbar } from "../../layout/navbar/navba";
import "./Profile.css";

const Profile = () => {
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
            <div className="well sup_well" style={{height: "135px"}}>
              <h6 className="fs-6">Support</h6>
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-edit-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-edit"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-edit"
                  aria-selected="true"
                >
                  Edit
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </div>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-edit"
                role="tabpanel"
                aria-labelledby="v-pills-edit-tab"
              >
                <div className="dsa">
                  <div>
                    <h4 className="fs-5 text-white">Edit your profile:</h4>
                    <hr />
                  </div>
                  <div id="submitForm" className="well">
                    <form
                      className
                      id="verticalForm"
                      action="/support/create"
                      method="post"
                    >
                      <input
                        type="hidden"
                        defaultValue="MWZqZFI2M0JuR0xfdmpUR2RaZGRWRGQzb2FMX05ZbGyeW2ne4rUPeS09Rjk5Oqs2xPPD29dipCtFWv4MUlVk1Q=="
                        name="YII_CSRF_TOKEN"
                      />
                      <div className="control-group">
                        <label
                          className="control-label required fw-bold text_gray"
                          htmlFor="newTicket_subject"
                        >
                          Your Password<span className="required">:</span>
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
                          className="control-label required fw-bold text_gray"
                          htmlFor="newTicket_department"
                        >
                          Your Jabber<span className="required">:</span>
                        </label>
                        <div className="controls">
                          <input
                            className="form-control"
                            name="newTicket[subject]"
                            id="newTicket_subject"
                            type="text"
                            maxLength={50}
                          />
                        </div>
                      </div>

                      <div className="form-actions mt-4">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          name="yt0"
                        >
                          update
                        </button>
                        <button className="btn" type="reset">
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="dsa">
                  <h2 className="fs-2 text-white fw-normal">
                    Multi Factor Authentication (2FA)
                  </h2>

                  <div className="well well_p">
                    <h6>2FA Authentication</h6>
                    <a href="#" className="text_lightblue">
                      Enable 2FA
                    </a>
                  </div>
                  <h2 className="fs-2 text-white fw-normal">Short info</h2>
                  <div className="alert alert-warning">
                    Please make sure that your jabber still live and actual.
                    <br />
                    You can fast restore access to your account writting support
                    from current jabber.
                    <br />
                    You can always edit it in your profile -&gt; Edit or ask
                    support
                    <br />
                    ---
                    <br />
                    Thanks!
                  </div>
                  <div className="alert alert-success">
                    Please note, we use invitation code system during the
                    registration. You can share your unique invitation code to
                    invite your friends.
                    <br />
                    <h2>f33b84ea9a9876da2922d6790ae8403d (used 0 times)</h2>
                    Please remember u can only use it <strong>2 times</strong>.
                    Then it would be replaced with a new one.
                  </div>

                  <table
                    className="detail-view table table-striped table-condensed"
                    id="yw2"
                  >
                    <tbody>
                      <tr className="odd">
                        <th>Username</th>
                        <td>boxman8</td>
                      </tr>
                      <tr className="even">
                        <th>Balance</th>
                        <td>0.82$</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 className="fs-2 text-white fw-normal">
                    Statistics of purchases
                  </h2>
                  <div className="table-responsive">
                    <table className="items table table-striped table-bordered table-condensed">
                      <thead>
                        <tr>
                          <th id="yw3_c0">Section</th>
                          <th id="yw3_c1">Total</th>
                          <th id="yw3_c2">Amounts</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td>CCS</td>
                          <td style={{ width: "50px" }}>8pcs</td>
                          <td style={{ width: "50px" }}>46.00$</td>
                        </tr>
                        <tr className="even selected">
                          <td>Dumps</td>
                          <td style={{ width: "50px" }}>0pcs</td>
                          <td style={{ width: "50px" }}>0.00$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invite-button"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
