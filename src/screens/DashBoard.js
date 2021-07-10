import React, { useEffect, useState } from "react";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import "./Dashboard.css";
import DashboardBarGraph from "../components/DashboardBarGraph";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../utils/Links";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [userCount, setUserCount] = useState(0);
  const [driverCount, setDriverCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [driverList, setDriverList] = useState([]);
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    const calculateUsersCount = async () => {
      const userCount = await axios.get(`${BASE_URL}/admin/users-count`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      setUserCount(userCount.data.data);
      const driverCount = await axios.get(`${BASE_URL}/admin/drivers-count`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      setDriverCount(driverCount.data.data);
      const jobCount = await axios.get(`${BASE_URL}/admin/users-count`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      setJobCount(jobCount.data.data);
    };
    calculateUsersCount();

    const setListData = async () => {
      const jobsArray = await axios.get(
        `${BASE_URL}/admin/jobs?recordsPerPage=3`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );

      setJobList(jobsArray.data.data[0].foundJobs);
      const driverArray = await axios.get(
        `${BASE_URL}/admin/drivers?recordsPerPage=3`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setDriverList(driverArray.data.data[0].foundDrivers);
    };
    setListData();
  }, []);

  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("week");

  var customData = {
    id: "Jobs",
    color: "hsl(290, 70%, 50%)",
  };
  useEffect(() => {
    const fetchData = async (duration) => {
      const res = await axios.get(`${BASE_URL}/admin/jobs/${duration}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      let jobStats = res.data.data[0].foundStats.map((job) => {
        job.x = job.date.substring(5, 10);
        job.y = job.total_jobs;
        return job;
      });
      jobStats.reverse();
      customData.data = jobStats;
      setData([customData]);
    };
    const fetchYearData = async () => {
      const res = await axios.get(`${BASE_URL}/admin/jobs/week`);
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let jobStats = res.data.data[0].foundStats.map((job) => {
        // job.x = job.date.substring(0, 10);
        job.x = months[job._id.month - 1];
        job.y = job.total_jobs;
        return job;
      });
      jobStats.reverse();
      customData.data = jobStats;
      setData([customData]);
    };
    // fetchData("lastWeekJobs");
    // fetchData("lastMonthJobs");
    // period === "year"
    //   ? fetchYearData()
    period === "month" ? fetchData("month") : fetchData("week");
  }, [period]);

  return (
    <div className="" style={{ width: "100%", backgroundColor: "#B49FD7" }}>
      <div className="dashboard-tabs">
        <TotalCountTab icon={<WorkIcon />} text="Total Jobs" count={jobCount} />
        <TotalCountTab
          icon={<PeopleIcon />}
          text="Total Users"
          count={userCount}
        />
        <TotalCountTab
          icon={<DriveEtaIcon />}
          text="Total Drivers"
          count={driverCount}
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

                {jobList && jobList.length > 0 ? (
                  jobList.map((job) => {
                    return (
                      <li
                        key={job._id}
                        className="list-group-item d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        {/* <div className="d-flex  justify-content-center"> */}
                        <p className="m-0 p-0"> {job.package_title}</p>
                        {/* </div> */}
                      </li>
                    );
                  })
                ) : (
                  <div className="text-center p-4">
                    <Spinner animation="border" />
                  </div>
                )}

                <li className="list-group-item text-center ">
                  <button
                    onClick={() => history.push("/tracking")}
                    className="bg-main btn-sm btn"
                  >
                    View All
                  </button>
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
                <li className="list-group-item  bg-main">Drivers</li>
                {driverList && driverList.length > 0 ? (
                  driverList.map((driver) => {
                    return (
                      <li key={driver._id} className="list-group-item">
                        {driver.name}
                      </li>
                    );
                  })
                ) : (
                  <div className="text-center p-4">
                    <Spinner animation="border" />
                  </div>
                )}
                <li className="list-group-item text-center ">
                  <button
                    onClick={() => history.push("/userAccount")}
                    className="bg-main btn-sm btn"
                  >
                    View All
                  </button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
