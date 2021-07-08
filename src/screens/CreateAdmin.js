import React from "react";
import "./CreateAdmin.css";

const CreateAdmin = () => {
  return (
    <div className="p-3">
      <h3>New Admin</h3>
      <div className="custom-container">
        <div className="create-admin-container row">
          <div className="col-md-3">
            <img
              height="160"
              style={{ borderRadius: "50%" }}
              src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
          <div className="col-md-9">
            <form action="">
              <div className="row">
                <div className="g-2 col-md-12 ">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="g-2 col-md-6">
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone"
                  />
                </div>
                <div className="g-2 col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="g-2 col-md-12 ">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Location"
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
                <button className="mt-5 btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
