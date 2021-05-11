import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import './SupportListing.css'
const SupportListing = () => {
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
      <div>
        <ul class="list-group support-listing-ul pt-3">
          <li class="list-group-item custom-container support-listing-list m-2 align-items-center">
            <span>James Charles</span>
            <span>Payment issue</span>
            <span>23 November 2020</span>
          </li>
          <li class="list-group-item custom-container support-listing-list m-2 align-items-center">
            <span>James Charles</span>
            <span>Payment issue</span>
            <span>23 November 2020</span>
          </li>
          <li class="list-group-item custom-container support-listing-list m-2 align-items-center">
            <span>James Charles</span>
            <span>Payment issue</span>
            <span>23 November 2020</span>
          </li>
          <li class="list-group-item custom-container support-listing-list m-2 align-items-center">
            <span>James Charles</span>
            <span>Payment issue</span>
            <span>23 November 2020</span>
          </li>
          <li class="list-group-item custom-container support-listing-list m-2 align-items-center">
            <span>James Charles</span>
            <span>Payment issue</span>
            <span>23 November 2020</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportListing;
