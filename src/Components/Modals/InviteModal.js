import React from "react";
import "./Style/Style.css"
const InviteModal = () => {
  return (
    <React.Fragment>
      <div>
        {/* Button trigger modal */}
        <div
          type="button"
          className="invite-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        ></div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabe2"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-inv alert alert-success">
            Please note, we use invitation code system during the registration.
            You can share your unique invitation code to invite your friends.
            <br />
            <h2>f33b84ea9a9876da2922d6790ae8403d(used0times)</h2> Please
            remember u can only use it <strong>2 times</strong>. Then it would
            be replaced with a new one.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InviteModal;
