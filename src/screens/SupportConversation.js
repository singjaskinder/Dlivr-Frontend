import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import "./SupportConversation.css";
function SupportConversation() {
  return (
    <div className="bg-main px-5 py-3">
      <div className="support-listing-header">
        <h3>Support</h3>
        <div className="d-flex align-items-center">
          <button className="bg-button btn btn-block">Archieved</button>
          <button className="bg-button btn btn-block">Started</button>
          <input type="email" class="form-control" placeholder="Search.." />
        </div>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <button className="bg-button btn btn-block">Primary</button>
          <button className="bg-button btn btn-block">Users</button>
          <button className="bg-button btn btn-block">Drivers</button>
        </div>
        <div>
          <DeleteIcon />
          <SaveAltIcon />
        </div>
      </div>
      <div className="custom-container support-conversation-container">
        <div className=" support-conversation-header">
          <img
            height="60"
            style={{ borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <h3 className="float-right">James Charles</h3>
        </div>
        <div className="px-3">
          <h4>Complaint regarding delivery issues</h4>
          <p>
            Lorem ipsum dolor sit amettationem nesciunt harum ipsa? Distinctio
            voluptates nemo dolorem a, animi odit totam. Velit praesentium
            minima tenetur natus molestias architecto deleniti fuga ab provident
            dicta, harum doloribus fugit consequuntur dolor laudantium sint
            tempore labore, possimus error. Alias possimus voluptatem maxime
            dolorum voluptas nihil expedita numquam exercitationem porro modi
            et, libero reprehenderit, dignissimos magni excepturi. Rerum,
            numquam tempore. Quos tempora sed provident! Doloribus impedit iusto
            cumque corporis assumenda fuga iste magni ipsum provident qui
            explicabo non aliquid id quos sit, placeat iure similique voluptate
            aspernatur sapiente atque quis natus eos! Sed natus rem provident,
            unde aliquid ad minima ipsa dolor.
          </p>
          <button className="bg-button m-2">Reply</button>
          <textarea
            style={{ border: "none", boxShadow: "1px 1px 1px 1px grey" }}
            className="form-control pt-"
            cols="20"
            rows="4"
          ></textarea>
          <button className="bg-button m-2 text-right">Send</button>
        </div>
      </div>
    </div>
  );
}

export default SupportConversation;
