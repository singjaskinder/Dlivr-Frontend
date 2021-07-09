import React from "react";
import "./CreateAdmin.css";
import { geolocated, geoPropTypes } from "react-geolocated";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Links";

const CreateAdmin = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${BASE_URL}/admin/create`, {
          email,
          phone,
          name,
          password,
          address: Location,
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        })
        .then((res) => {
          setEmail("");
          setName("");
          setPassword("");
          setPhone("");
          setLocation("");
          toast.success(res.data.message);
        })
        .catch((res) => {
          setEmail("");
          setName("");
          setPassword("");
          setPhone("");
          setLocation("");

          toast.danger(res.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3">
      <h3>New Admin</h3>
      <div className="custom-container">
        <div className="create-admin-container">
          <img
            height="160"
            style={{ borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />

          <form action="">
            <div className="row">
              <div className="g-2 col-md-6 ">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="g-2 col-md-6">
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="g-2 col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="g-2 col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="g-2 col-md-12 ">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="g-2">
                <label htmlFor="Position">Position</label>
                <select className="form-select " name="" id="">
                  <option value="">Manager</option>
                  <option value="">Admin</option>
                  <option value="">Staff</option>
                </select>
              </div>
              <button
                onClick={submitHandler}
                className="mt-5 btn  btn-sm btn-primary btn-block bg-button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
