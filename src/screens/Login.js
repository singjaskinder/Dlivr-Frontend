import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dashboard from './DashBoard';
import "./Login.css";
import axios from "axios"


function Login({ Login, error }) {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/admin/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div class="div-body">
      <div align="center">


        <h1 className="log-head">Hello!</h1>
        <h4>Log in to your account</h4>
        <div>
          {(error !== "") ? (<div className="error">{error}</div>) : ""}
          <div>
            <div className="input-container">
              <form onSubmit={submitHandler}>

                <input

                  type="email"
                  name="email"
                  placeholder="Email"
                  className="ins"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                >
                </input>
                <br />
                <input

                  type="password"
                  name="password"
                  placeholder="Password"
                  className="ins"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required
                >
                </input>
                <div className="log-con">
                  <button
                  type="submit"
                  value="submit"
                    onClick={submitHandler}
                    className="login-btn"
                  >LOGIN</button>
                </div>

              </form>
            </div>
          </div>


          <button className="plane-btn" >Forgot password?</button>
          <br />



          <div className="rem-me">
            <input className="rad-btn" type="radio" value="rememberMe" name="rememberMe" />
                    Remember me
                    </div>

        </div>

      </div>


    </div>


  )
}



export default Login;
