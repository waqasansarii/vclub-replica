import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from '../../state/reducer'
import "./Form.css";

const Login = () => {
  const dispatch = useDispatch()

  let history = useHistory()
  let handleLogin = () => {
    dispatch(login(true))
    history.push('news')
  }

  return (
    <React.Fragment>
      <div className="mainForm">
        <h6 className="text-center light_gray">
          Registration: Open, Registration Fee: $30
        </h6>

        <div className="form_section">
          <form action="#" className="login_form">
            <div className="d-flex flex-column">
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
                  src="https://vclub.tel/usercp/auth/captcha?v=6071897b2433d"
                  alt=""
                />
              </div>
            </div>
            <div className="form_buttons">
              <button className="btn lgn_btn" type='button' onClick={handleLogin}>Login</button>
              <button className="btn reg_btn"
              //  onClick={()=>{history.push("register")}}
              >Registration</button>
            </div>
            <div className="feilds light_gray">
              <p>
                Dear customers If you lost your password please contact
                support@valid.support on jabber.
              </p>
              <p>
                If you want to be
                <span className="light_green">our seller</span>,
                <span className="light_blue">register here.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
