import React, { useEffect, useState } from "react";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import "./Dashboard.css";
import DashboardBarGraph from "../components/DashboardBarGraph";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
const TotalCountTab = ({ icon, text, count }) => {
  return (
    <div
      className="count-tab custom-container "
      style={{ justifyContent: "space-between" }}
    >
      {icon}
      <p>{text}</p>
      <p>{count}</p>
    </div>
  );
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("month");
  const data1 = [
    { week: 18, status: "upcoming", count: 3 },
    { week: 18, status: "cancelled", count: 1 },
    { week: 18, status: "inprogress", count: 2 },
    { week: 18, status: "completed", count: 1 },
    { week: 18, status: "bidding", count: 1 },

    { week: 17, status: "upcoming", count: 9 },
    { week: 17, status: "cancelled", count: 6 },
    { week: 17, status: "inprogress", count: 4 },
    { week: 17, status: "completed", count: 3 },
    { week: 17, status: "bidding", count: 8 },

    { week: 16, status: "upcoming", count: 4 },
    { week: 16, status: "cancelled", count: 2 },
    { week: 16, status: "inprogress", count: 9 },
    { week: 16, status: "completed", count: 4 },
    { week: 16, status: "bidding", count: 9 },

    { week: 15, status: "upcoming", count: 3 },
    { week: 15, status: "cancelled", count: 8 },
    { week: 15, status: "inprogress", count: 4 },
    { week: 15, status: "completed", count: 9 },
    { week: 15, status: "bidding", count: 4 },
  ];
  useEffect(() => {
    setData(formatData(period));
  }, [period]);

  const myData = (cStatus, duration) => {
    const filteredData = data1
      .filter((item) => {
        return item.status === cStatus;
      })
      .map((i) => {
        i.x = period === "month" ? i.week : i.date;
        i.y = i.count;
        return i;
      });
    return filteredData;
  };

  const formatData = (duration) => {
    let finalData = [];
    finalData.push(
      {
        id: "bidding",
        color: "red",
        data: myData("bidding", duration),
      },
      {
        id: "inprogress",
        color: "yellow",
        data: myData("inprogress", duration),
      },
      {
        id: "upcoming",
        color: "pink",
        data: myData("upcoming", duration),
      },
      {
        id: "completed",
        color: "green",
        data: myData("completed", duration),
      },
      {
        id: "cancelled",
        color: "blue",
        data: myData("cancelled", duration),
      }
    );
    return finalData;
  };

  return (
    <div className="" style={{ width: "100%", backgroundColor: "#B49FD7" }}>
      <div className="dashboard-tabs">
        <TotalCountTab icon={<WorkIcon />} text="Total Jobs" count={2541} />
        <TotalCountTab icon={<PeopleIcon />} text="Total Users" count={2541} />
        <TotalCountTab
          icon={<DriveEtaIcon />}
          text="Total Drivers"
          count={2541}
        />
      </div>
      <div className="px-2 graph-list-container dashboard-container-height">
        <Row className="dashboard-container-height">
          <Col md={8}>
            <div className="dashboard-bar-graph custom-container">
              <div className="dashboard-bar-graph-inside">
                <h4>Total Income</h4>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                <h5>25000</h5>
              </div>
              {data && <DashboardBarGraph stats={data} height="13rem" />}{" "}
            </div>
          </Col>
          <Col md={4}>
            <div className="custom-container ">
              <ul className="list-group">
                <li className="list-group-item  bg-main">Jobs</li>
                <li
                  className="list-group-item d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex  justify-content-center">
                    <img
                      height="30"
                      style={{ borderRadius: "50%" }}
                      src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt=""
                    />
                    &nbsp; &nbsp;
                    <p className="m-0 p-0"> James Charles</p>
                  </div>
                  <p className="m-0 p-0">2:40 PM</p>
                </li>
                <li
                  className="list-group-item d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex  justify-content-center">
                    <img
                      height="30"
                      style={{ borderRadius: "50%" }}
                      src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt=""
                    />
                    &nbsp; &nbsp;
                    <p className="m-0 p-0"> James Charles</p>
                  </div>
                  <p className="m-0 p-0">2:40 PM</p>
                </li>
                <li
                  className="list-group-item d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div className="d-flex  justify-content-center">
                    <img
                      height="30"
                      style={{ borderRadius: "50%" }}
                      src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt=""
                    />
                    &nbsp; &nbsp;
                    <p className="m-0 p-0"> James Charles</p>
                  </div>
                  <p className="m-0 p-0">2:40 PM</p>
                </li>

                <li className="list-group-item text-center ">
                  <button className="bg-main btn-sm btn">View All</button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-2 graph-list-container dashboard-container-height">
        <Row className="dashboard-container-height">
          <Col md={8}>
            <div className="dashboard-bar-graph custom-container">
              <div className="dashboard-bar-graph-inside">
                <h4>Total Income</h4>
                <select>
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
                <h5>25000</h5>
              </div>
              {/* <DashboardBarGraph height="13rem" /> */}
            </div>
          </Col>
          <Col md={4}>
            <div className="custom-container ">
              <ul className="list-group">
                <li className="list-group-item  bg-main">Users</li>
                <li className="list-group-item">And a fifth one</li>
                <li className="list-group-item">And a fifth one</li>
                <li className="list-group-item">And a fifth one</li>
                <li className="list-group-item">And a fifth one</li>
                <li className="list-group-item">And a fifth one</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;

// useEffect(() => {
//   const fetchData = async (duration) => {
//     const res = await axios.get(`/admin/stats/${duration}`);

//     let jobStats = res.data.data[0].foundStats.map((job) => {
//       job.x = job.date.substring(0, 10);
//       job.y = job.total_jobs;
//       return job;
//     });
//     jobStats.reverse();
//     customData.data = jobStats;
//     console.log([customData]);
//     setData([customData]);
//   };

//   period === "year"
//     ? fetchYearData()
//     : period === "month"
//     ? fetchData("lastMonthJobs")
//     : fetchData("lastWeekJobs");
// }, [period]);

// const fetchYearData = async () => {
//   const res = await axios.get("/admin/stats/lastYearJobs");
//   var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   let jobStats = res.data.data[0].foundStats.map((job) => {
//     // job.x = job.date.substring(0, 10);
//     job.x = months[job._id.month - 1];
//     job.y = job.total_jobs;
//     return job;
//   });
//   jobStats.reverse();
//   customData.data = jobStats;
//   console.log([customData]);
//   setData([customData]);
// };
