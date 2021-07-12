import { useState, useEffect } from "react";
import "./Order.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const URL = "https://dlivr.herokuapp.com";

function OrderImg(prop) {
  return (
    <span>
      <img
        src={
          "https://storage.googleapis.com/dlivr-55a47.appspot.com/" +
          prop.imgsrc
        }
        alt="Job Image"
      ></img>
    </span>
  );
}

function OrderCard(prop) {
  return (
    <span id={prop.Id}>
      <h5>{prop.name}</h5>
      <p>{prop.Id}</p>
    </span>
  );
}

function Order() {
  const history = useHistory();
  const { job } = useParams();

  const [name, setname] = useState("NA");
  const [pickDate, setpickDate] = useState("NA");
  const [status, setstatus] = useState("");
  const [driver, setdriver] = useState("NA");
  const [pickLocation, setpickLocation] = useState("NA");
  const [dropLocation, setdropLocation] = useState("NA");
  const [dropDate, setdropDate] = useState("NA");
  const [fastDelivry, setfastDelivry] = useState("NA");
  const [jobType, setjobType] = useState("NA");
  const [title, settitle] = useState("NA");
  const [orderId, setorderId] = useState("00000000000000000000000");
  const [package_size, setpackage_size] = useState("NA");
  const [package_weight, setpackage_weight] = useState("NA");
  const [extra_help, setextra_help] = useState("NA");
  const [images, setimages] = useState([]);
  const [jobData, setJobData] = useState({});

  const GetJob = async () => {
    const url = URL + "/job/" + job;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => {
        console.log(res);
        const data = res.data.data[0].requestedJob;
        setJobData(data);
        addLoader(data);
      })
      .catch((err) => console.log(err));
  };

  const addLoader = (data) => {
    console.log("insined add loader");
    const b = document.getElementById("bidding");
    const u = document.getElementById("upcoming");
    const i = document.getElementById("inprogress");
    const c = document.getElementById("completed");
    if (data.status === "bidding") {
      b.classList.add("active");
    } else if (data.status === "upcoming") {
      b.classList.add("done");
      u.classList.add("active");
    } else if (data.status === "inprogress") {
      console.log("insinde in progress");
      b.classList.add("done");
      u.classList.add("done");
      i.classList.add("active");
    } else if (data.status === "completed") {
      b.classList.add("done");
      u.classList.add("done");
      i.classList.add("done");
      c.classList.add("active");
    } else if (data.status === "cancelled") {
      const st = document.getElementById("OrderStatus");
      st.classList.add("hidden");
      const cn = document.getElementById("cancelled");
      cn.classList.add("text-danger");
      cn.classList.add("fw-bold");
    }
  };

  useEffect(() => {
    GetJob();
  }, []);

  return (
    <div className="order">
      <div className="OrderStatus">
        <h4>Job Id: {jobData._id}</h4>
        <ul class="container" id="OrderStatus">
          <li className="link " id="bidding">
            Bidding
          </li>
          <li className="link " id="upcoming">
            Upcoming
          </li>
          <li className="link  " id="inprogress">
            Inprogress
          </li>
          <li className="link a" id="completed">
            Completed
          </li>
        </ul>
      </div>

      <div className="orderDetail">
        <OrderCard name="Name" Id={jobData.package_title} />
        <OrderCard name="Pick Date" Id={jobData.createdAt} />
        <OrderCard name="Drop Date" Id={jobData.bidding_end_date} />
        <OrderCard name="Status" Id={jobData.status} />
        <OrderCard
          name="Driver"
          Id={jobData.driverId ? jobData.driverId.name : "Not Assigned yet"}
        />
        <OrderCard name="Pick Location" Id={jobData.pick_address} />
        <OrderCard name="Drop Location" Id={jobData.drop_address} />
        <OrderCard
          name="Fast Delivery"
          Id={jobData.fast_delivery ? "Yes" : "No"}
        />
        <OrderCard name="Job Type" Id={jobData.job_type} />
        <OrderCard name="Package SIze" Id={jobData.package_size} />
        <OrderCard name="Package weight" Id={jobData.package_weight} />
        <OrderCard name="Extra Help" Id={jobData.extra_help} />
      </div>
      <div className="orderImg">
        {images.map((image, index) => {
          return <OrderImg key={index} imgsrc={image.path} />;
        })}
      </div>
    </div>
  );
}

export default Order;
