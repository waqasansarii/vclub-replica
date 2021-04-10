import React from "react";

const Register = () => {
  
  return (
    <React.Fragment>
      <div className="mainRegForm">
        <h6 className="text-start light_gray">
          Registration: Open, Registration Fee: $30
        </h6>
        <br />
        <span className="text-red">
          Please Note Inactive users Without Balance will be deleted Weekly
        </span>

        <div className="form_section">
          <form action="#" className="register_form">
            <div className="d-flex">
              <input
                className="full_input"
                placeholder="Username*"
                type="text"
              />
              <input
                className="full_input"
                placeholder="Password*"
                type="password"
              />
            </div>
            <div className="d-flex">
              <input
                className="full_input"
                placeholder="Username*"
                type="text"
              />
              <input
                className="full_input"
                placeholder="Password*"
                type="password"
              />
            </div>
            <div className="d-flex">
              <input
                className="max_input"
                placeholder="Username*"
                type="text"
              />
            </div>
            <div className="d-flex align-items-center">
              <div>
                <input
                  type="text"
                  className="input_half"
                  placeholder="Captcha"
                />
              </div>
              <div className="captcha" id="captcha">
                <img
                  id="yw1"
                  src="https://vclub.tel//usercp/auth/captcha?v=6065b41580636"
                  alt=""
                />
              </div>
              <div className="reg_form_button">
                <button className="btn reg_btn">Register</button>
              </div>
            </div>

            <div className="reg_feilds light_gray">
              You can get <span style={{ color: "red" }}>invitation code </span>
              and news using our telegram bot: &nbsp;	
              <a href="#" className="light_blue">
                <img
                  src="https://vclub.tel/images/telegram.svg"
                  width={32}
                  height={32}
                  alt="Telegram logo"
                />
                @Vclubshop_Bot
              </a>
              . Go to bot in telegram, click on &nbsp;
              <span className="badge badge-primary">/start</span> button and
              enter command <span className="badge badge-primary">/invite</span>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
