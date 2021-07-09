import { useState, useEffect } from "react";
import "./Order.css"
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"

const URL = "https://dlivr.herokuapp.com";

function OrderImg(prop) {

    return (
        <span>
            <img src={"https://storage.googleapis.com/dlivr-55a47.appspot.com/" + prop.imgsrc} alt="Job Image"></img>

        </span>
    )
}

function OrderCard(prop) {

    return (
        <span id={prop.Id}>
            <h5>{prop.name}</h5>
            <p>{prop.Id}</p>
        </span>
    )
}


function Order() {

    const history = useHistory();
    const { job } = useParams();

    const [name, setname] = useState("NA");
    const [pickDate, setpickDate] = useState("NA");
    const [status, setstatus] = useState("NA");
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

    const GetJob = async () => {

        const url = URL + '/job/' + job;
        axios({
            method: "get",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                console.log("api called")
                console.log(res)
                const data = res.data.data[0].requestedJob;
                console.log(data)
                console.log(data.job_type)

                setname(data.userId !== null ? data.userId._id : "Temp User");
                setpickDate(data.bidding_end_date)
                setstatus(data.status)
                settitle(data.package_title)
                setpickLocation(data.pick_address)
                setdropLocation(data.drop_address)
                setdropDate(data.delivered_date)
                setfastDelivry(data.fast_delivery ? "yes" : "no")
                setjobType(data.job_type)
                setorderId(data._id)
                setpackage_size(data.package_size)
                // setpackage_size(data.package_size)
                setpackage_weight(data.package_weight)
                setextra_help(data.extra_help)
                setimages(data.images)
                setdriver(data.driverId.name)


                const b = document.getElementById("bidding");
                const u = document.getElementById("upcoming");
                const i = document.getElementById("inprogress");
                const c = document.getElementById("completed");

                if (status === "bidding") {
                    b.classList.add('active');
                }
                else if (status === "upcoming") {
                    b.classList.add('done');
                    u.classList.add('active');
                }
                else if (status === "inprogress") {
                    b.classList.add('done');
                    u.classList.add('done');
                    i.classList.add('active');
                    console.log(1)
                }
                else if (status === "completed") {
                    b.classList.add('done');
                    u.classList.add('done');
                    i.classList.add('done');
                    c.classList.add('active');
                }
                else if (status === "cancelled") {
                    const st = document.getElementById("OrderStatus");
                    st.classList.add("hidden")
                    const cn = document.getElementById("cancelled");
                    cn.classList.add("text-danger")
                    cn.classList.add("fw-bold")

                }
                console.log(data.images[0].path)

            })
            .catch(err => console.log(err))
    }



    useEffect(() => {
        GetJob();
    }, [])


    return (
        <div className="order">
            <div className="OrderStatus"  >
                <h4>Job Id: {orderId}</h4>
                <ul class="container" id="OrderStatus">

                    <li className="link " id="bidding">Bidding</li>
                    <li className="link " id="upcoming">Upcoming</li>
                    <li className="link  " id="inprogress">Inprogress</li>
                    <li className="link a" id="completed">Completed</li>
                </ul>
            </div>

            <div className="orderDetail">
                < OrderCard
                    name="Name"
                    Id={name}
                />
                < OrderCard
                    name="Pick Date"
                    Id={pickDate}
                />
                < OrderCard
                    name="Drop Date"
                    Id={dropDate}
                />
                < OrderCard
                    name="Status"
                    Id={status}
                />
                < OrderCard
                    name="Driver"
                    Id={driver}
                />
                < OrderCard
                    name="Pick Location"
                    Id={pickLocation}
                />
                < OrderCard
                    name="Drop Location"
                    Id={dropLocation}
                />
                < OrderCard
                    name="Fast Delivery"
                    Id={fastDelivry}
                />
                < OrderCard
                    name="Package Title"
                    Id={title}
                />
                < OrderCard
                    name="Job Type"
                    Id={jobType}
                />
                < OrderCard
                    name="Package SIze"
                    Id={package_size}
                />
                < OrderCard
                    name="Package weight"
                    Id={package_weight}
                />
                < OrderCard
                    name="Extra Help"
                    Id={extra_help}
                />

            </div>
            <div className="orderImg">
                {
                    images.map((image, index) => {
                        return (
                            <OrderImg
                                imgsrc={image.path}
                            />
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Order;