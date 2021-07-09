import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import axios from "axios";
import { BASE_URL } from "../utils/Links";

function Login({ Login, error }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/admin/login`, {
        email,
        password,
      })
      .then((response) => {
        toast.success(response.data.message);
        localStorage.setItem(
          "name",
          JSON.stringify(response.data.data[0].name)
        );
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.data[0].token)
        );
        history.push("/dashboard");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.message, {});
        console.log(e);
      });
  };

  return (
    <div class="div-body" align="center">
      <div className="new-password-con">
        <h1 className="log-head">Hello!</h1>
        <h4>Log in to your account</h4>
        <div>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div>
            <div className="input-container">
              <form onSubmit={submitHandler}>
                {/* <input

                  type="email"
                  name="email"
                  placeholder="Email"
                  className="ins"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                >
                  </input> */}
                <br />
                <div className="login-pass-con login-email-input">
                  <button className="user-icon">
                    <i class="far fa-user"></i>
                  </button>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="login-pass-input"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                </div>

                {/* <input

                  type="password"
                  name="password"
                  placeholder="Password"
                  className="ins"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required
                >
                </input> */}

                <div className="login-pass-con login-email-input">
                  <button className="user-icon">
                    <i class="fas fa-lock"></i>
                  </button>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="login-pass-input"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  ></input>
                </div>
                <div>
                  <button className="plane-btn">Forgot password?</button>
                </div>

                <div className="new-pass-con new-password-btn-con ">
                  <button
                    type="submit"
                    value="submit"
                    onClick={submitHandler}
                    className="login-btn"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="rem-me">
            <input
              className="rad-btn"
              type="radio"
              value="rememberMe"
              name="rememberMe"
            />
            Remember me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
