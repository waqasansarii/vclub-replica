import React from "react";
import "./Style/Style.css";
const SuppoetModal = () => {
  return (
    <React.Fragment>
      <div>
        {/* Button trigger modal */}
        <div
          type="button"
          className="support-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-supp">
            <p>
              <strong>If you have any problem please add us on&nbsp;</strong>
            </p>
            <p>
              <strong>
                <span style={{ color: "#ff0000" }}>JABBER1</span>:
                support@valid.support
                <a href="mailto:SUPPORT@VAL1D.IM">
                  <br />
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <span style={{ color: "#ff0000" }}>JABBER2:</span>
                &nbsp;support2@valid.support
              </strong>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuppoetModal;
