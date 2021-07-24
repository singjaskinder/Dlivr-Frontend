import { useState, useEffect } from "react";
import "./Vehicles.css";
import { Link, NavLink } from "react-router-dom";
import ScreenHeading from "../components/ScreenHeading";
import axios from "axios";
// import SkeletonVehicle from "../skeleton/SkeletonVehicle";
import LoadingBar from "react-top-loading-bar";
import { BASE_URL } from "../utils/Links";

function Vehicles() {
  const [progress, setProgress] = useState(0);
  const [vehicles, setVehicles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [searchByNumber, setSearchByNumber] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadVehicles();
  }, []);

  const searchVehicles = async () => {
    try {
      console.log("clicked");
      console.log(searchValue);
      var searchResults = [];
      searchResults = searchByNumber
        ? vehicles.filter((item) => item.number.includes(searchValue))
        : vehicles.filter((item) =>
          item.owner_id.name.toLowerCase().includes(searchValue.toLowerCase())
        );

      console.log(searchResults);
      setResult(searchResults);
      console.log(searchByNumber);
    } catch (error) {
      console.log(error);
    }
  };

  const loadVehicles = () => {
    try {
      setIsLoading(true)
      axios
        .get(`${BASE_URL}/admin/vehicles`, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          setIsLoading(false)
          setVehicles(res.data.data[0].foundVehicles);
          setResult(res.data.data[0].foundVehicles);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  function ResultNotFound() {
    return (
      <div className="result-not-found">
        <h2>vehicle doesn't exist</h2>
        <i className="fas fa-times " onClick={reset} type="reset"></i>
      </div>
    );
  }

  const reset = () => {
    setSearchValue("");
    setResult(vehicles);
  };

  return (
    <>
      <LoadingBar
        color="#6f2da8"
        height={3}
        loaderSpeed={600}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="vehicleHeading">
        <ScreenHeading heading="Vehicles" />
        <Link to="/vehicles/categories">
          <button className="addVehicleCategoryBtn">
            Add vehicle Category
          </button>
        </Link>
      </div>
      {vehicles.length === 0 && isLoading
        ?
        <div className="spinner-wrapper">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        : <p className="noVehicleFound">No Data Found!</p>}
      {vehicles.length !== 0 && (
        <>
          <div className="vehicleCount">
            <div className="data">
              <p className="data_heading">Total Vehicles</p>
              <p className="data_count">{vehicles.length}</p>
            </div>
            <div className="icon">
              <i className="fas fa-truck"></i>
            </div>
          </div>
          <div className="filters">
            {/* <div className="filter">
              <p className="filter_heading">Type</p>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="filter">
              <p className="filter_heading">Color</p>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="reset">
              <p className="filter_heading">Reset</p>
            </div> */}
            <div className="search-by-specific-field-con">
              <select
                className="search-by-specific-field"
                value={searchByNumber}
                onChange={() => setSearchByNumber((prev) => !prev)}
              >
                {/* <option >Select before Search</option> */}
                <option
                  value={false}
                  onClick={() => setSearchByNumber(false)}
                  selected
                >
                  Search by Driver Name
                </option>
                <option value={true} onClick={() => setSearchByNumber(true)}>
                  Search by Vehicle Number
                </option>
              </select>
            </div>
            <div className="vehicle_searchField">
              <i onClick={searchVehicles} className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              {searchValue.length > 0 ? (
                <i className="fas fa-times " onClick={reset} type="reset"></i>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="row_heading">
              <li>Vehicle Type</li>
              <li>Vehicle No.</li>
              <li>Capacity</li>
              <li>Driver</li>
            </div>
            {result.length > 0 ? (
              result.map((item, index) => {
                return (
                  <NavLink
                    to={`/vehicles/${item._id}`}
                    key={index}
                    className="row_data"
                  >
                    <li>{item.type}</li>
                    <li>{item.number}</li>
                    <li>{item.load_capacity}</li>
                    <li>{item.owner_id.name}</li>
                  </NavLink>
                );
              })
            ) : (
              <div>
                <ResultNotFound />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Vehicles;

// const searchBy = (e) => {
//     setSearchByValue(e.target.value);

//     if (searchByValue === "number") {
//       setSearchByNumber(searchByValue);
//     }
//     if (searchByValue === "name") {
//       setSearchByDriverName(searchByValue);
//     }
//   };
//   const getFilteredVehicle = () => {
//     const filterVehicle = vehicles.filter((vehicle) => {
//       if (searchByValue === "number") {
//         var searchValue = vehicle.number;
//       }
//       if (searchByValue === "name") {
//         searchValue = vehicle.owner_id.name;
//       }
//       return searchValue.toLowerCase().includes(input.toLowerCase());
//     });
//     setVehicles(filterVehicle);
//   };

//   const getinput = (e) => {
//     e.preventDefault();
//     setInput(e.target.value);
//   };
//   const reset = (e) => {
//     setVehicles(result);
//     setInput("");
//   };

// async function getVehicles() {
//     await axios({
//       method: "GET",
//       url: URL + "/admin/getVehicles",
//       params: {
//         recordsPerPage: 25,
//       },
//     })
//       .then((res) => {
//         input !== ""
//           ? getFilteredVehicle()
//           : setVehicles(res.data.data[0].foundVehicles);
//         setResult(res.data.data[0].foundVehicles);
//       })
//       .catch((err) => console.log(err));
//   }
