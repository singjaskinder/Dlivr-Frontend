import { useState } from "react";
import "./Order.css"

function OrderImg(prop) {

    return (
        <span>
            <img src={prop.imgsrc} alt="Job Image"></img>
        </span>
    )
}

function OrderCard(prop) {

    return (
        <span>
            <h5>{prop.name}</h5>
            <p>{prop.Id}</p>
        </span>
    )
}


function Order() {

    const [name, setname] = useState("Sanjay");
    const [pickDate, setpickDate] = useState("19 April 2022");
    const [status, setstatus] = useState("Bidding");
    const [driver, setdriver] = useState("Ramesh");
    const [pickLocation, setpickLocation] = useState("Delhi");
    const [dropLocation, setdropLocation] = useState("Sydney");
    const [dropDate, setdropDate] = useState("27 april 2022");
    const [fastDelivry, setfastDelivry] = useState("YES");
    const [bidding, setbidding] = useState("20000");
    const [jobType, setjobType] = useState("Shoplifting");
    const [title, settitle] = useState("Shop Transfer");
    const [orderId, setorderId] = useState("01231232");


    return (
        <div className="order">
            <div className="OrderStatus" >
                <h1>Order Id: {orderId}</h1>
                <ul class="container">
                    <li className="link done" id="bidding">Bidding</li>
                    <li className="link done" id="upcoming">Upcoming</li>
                    <li className="link active " id="inprogress">Inprogress</li>
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
                    name="Bidding"
                    Id={bidding}
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
            </div>
            <div className="orderImg">
                < OrderImg
                    imgsrc="https://storage.googleapis.com/dlivr-55a47.appspot.com/Chat/imgfile__1619520951147.png"
                />
                < OrderImg
                    imgsrc="https://storage.googleapis.com/dlivr-55a47.appspot.com/Chat/imgfile__1619520951147.png"
                />
                < OrderImg
                    imgsrc="https://storage.googleapis.com/dlivr-55a47.appspot.com/Chat/imgfile__1619520951147.png"
                />
                < OrderImg
                    imgsrc="https://storage.googleapis.com/dlivr-55a47.appspot.com/Chat/imgfile__1619520951147.png"
                />
            </div>
        </div>
    );
}

export default Order;