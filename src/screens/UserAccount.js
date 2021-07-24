import { useState, useEffect } from "react"
import "./UserAccount.css"
import ScreenHeading from "../components/ScreenHeading";
import axios from "axios"
import { NavLink, useHistory } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const URL = "https://dlivr.herokuapp.com";

function UserAccount() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)

    const [progress, setProgress] = useState(0)
    const [data, setData] = useState([]);
    const [userComponent, setUserComponent] = useState(true);
    const [driverComponent, setDriverComponent] = useState(false);
    const [unverifiedDriverComponent, setUnverifiedDriverComponent] = useState(false);
    // ------------search-----------------
    const [input, setInput] = useState('');
    const [result, setResult] = useState(true);

    function ResultNotFound() {
        return (
            <div className="result-not-found-useracc">
                <h3>no result found!</h3>

                <i className="fas fa-times " onClick={reset}
                    type="reset" ></i>
            </div>
        )
    }
    const getFilteredDriver = () => {
        const filterDriver = data.filter(driver => {
            return driver.name.toLowerCase().includes(input.toLowerCase())
        })
        setData(filterDriver);
    }
    const getFilteredUser = () => {
        const filterUser = data.filter(user => {
            return user.name.toLowerCase().includes(input.toLowerCase())
        })
        setData(filterUser);
    }
    const getinput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    const reset = (e) => {
        setData(result)
        setInput("")
    }
    //-------------search end------------------------------------
    const setUser = () => {
        setUserComponent(true)
        setDriverComponent(false)
        setUnverifiedDriverComponent(false)
    }
    const setDriver = () => {
        setDriverComponent(true)
        setUserComponent(false)
        setUnverifiedDriverComponent(false)
    }

    const setUnverifiedDriver = () => {
        setDriverComponent(false)
        setUserComponent(false)
        setUnverifiedDriverComponent(true)

    }

    const getUsers = async () => {
        setProgress(70)
        setIsLoading(true)
        axios({
            method: "GET",
            url: URL + "/admin/users",
            params: {
                recordsPerPage: 10
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                setIsLoading(false)
                setProgress(100)
                input != "" ? (getFilteredUser()) : setData(res.data.data[0].foundUsers);
                setResult(res.data.data[0].foundUsers)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }

    const getDrivers = async () => {
        setProgress(70)
        setIsLoading(true)
        axios({
            method: "GET",
            url: URL + "/admin/drivers",
            params: {
                recordsPerPage: 10
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                setProgress(100)
                setIsLoading(false)
                input != "" ? getFilteredDriver() : setData(res.data.data[0].foundDrivers);
                setResult(res.data.data[0].foundDrivers)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    const getUnverifiedDrivers = async () => {
        setProgress(70)
        setIsLoading(true)
        axios({
            method: "GET",
            url: URL + "/admin/unverified-drivers",
            params: {
                recordsPerPage: 10
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                setData(res.data.data[0].foundDrivers);
                setProgress(100)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        setData([])
        if (userComponent) {
            getUsers()
        }
        if (driverComponent) {
            getDrivers()
        }
        if (unverifiedDriverComponent) {
            getUnverifiedDrivers()
        }
    }, [userComponent, driverComponent, unverifiedDriverComponent])

    return (
        <>
            <LoadingBar color="#6f2da8" height={3} loaderSpeed={600} progress={progress} onLoaderFinished={() => setProgress(0)} />

            <ScreenHeading heading="User Accounts" />
            <div className="selectionDiv">
                <p className={userComponent ? "activeField" : ""} onClick={() => setUser()}>Customers</p>
                <p className={driverComponent ? "activeField" : ""} onClick={() => setDriver()}>Drivers</p>
                <p className={unverifiedDriverComponent ? "activeField" : ""} onClick={() => setUnverifiedDriver()}>Unverified Drivers</p>
                <div className="searchField">
                    <i className="fas fa-search"
                        onClick={getDrivers}
                        type="reset"
                    ></i>

                    <input type="text"
                        placeholder="Search"
                        onChange={getinput}
                        value={input} />

                    <i className="fas fa-times " onClick={reset}
                        type="reset" ></i>

                </div>

            </div>
            <div className="rowData">
                <div className="rowHeading">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Phone Number</li>
                    <li>Registration Date</li>
                </div>
                {console.log(isLoading)}
                {data != "" ?
                    data.map((item, index) => {
                        var createdAt = item.createdAt;
                        var date = new Date(createdAt);
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();

                        var user;
                        if (userComponent == true) {
                            user = "user"
                        }
                        else if (driverComponent == true) {
                            user = "driver"
                        }
                        else if (unverifiedDriverComponent == true) {
                            user = "unverifiedDriver"
                        }
                        else {
                            history.push("/dashboard");
                        }

                        return (

                            <NavLink to={`/userAccount/${user}/${item._id}`} key={index} className="rowElement">
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                                <p>{day + "-" + month + "-" + year}</p>

                            </NavLink>
                        )
                    }) :
                    !isLoading ? <div><ResultNotFound /></div>
                        :
                        <div class="d-flex m-5 justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }


            </div>
        </>
    );
}


export default UserAccount;