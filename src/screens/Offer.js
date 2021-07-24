import "./temp.css";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Offer.css";
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/Links";

const UpdateOfferModal = ({ offer }) => {
  console.log(offer);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [description, setdescription] = useState(offer.description);
  const [offValue, setoffValue] = useState(offer.offValue);
  const [offerCode, setofferCode] = useState(offer.offerCode);
  const [expiration, setexpiration] = useState(offer.expiration);

  const updateOffer = async (offer) => {
    axios
      .put(
        `${BASE_URL}/admin/offer/${offer.id}`,
        {
          description: description,
          offerCode: offerCode,
          expiration: expiration,
          offValue: offValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((data) => {
        console.log(data);
        toast.success("Offer Updated");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: "pointer" }}>
        <i class="fas fa-edit"></i>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>EDIT OFFER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form class="form">
            <label>Description</label>
            <input
              className="form-control"
              required
              placeholder="Description"
              type="text"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            ></input>
            <label> OFF Value</label>
            <input
              className="form-control"
              required
              placeholder="% OFF Value"
              onChange={(e) => {
                if (e.target.value > 100 || isNaN(e.target.value)) return;
                else setoffValue(e.target.value);
              }}
              name="offValue"
              type="text"
              value={offValue}
            ></input>
            <label>Offer Code</label>
            <input
              className="form-control"
              required
              placeholder="must be 7  charcter long"
              onChange={(e) => setofferCode(e.target.value)}
              type="text"
              value={offerCode}
            ></input>

            <label>Expiration</label>
            <input
              className="form-control"
              required
              placeholder={new Date()}
              type="date"
              onChange={(e) => setexpiration(e.target.value)}
              value={expiration}
            ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateOffer(offer);
              handleClose();
            }}
          >
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function Pastoffer(prop) {
  console.log(prop);
  const deleteOffer = async (id) => {
    axios
      .delete(`${BASE_URL}/admin/offer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then(() => {
        toast.success("Offer Deleted Successfully");
      })
      .catch((e) => toast.warn(e.message));
  };

  return (
    <div className="offers">
      <span>{prop.offerCode}</span>
      <span>{prop.description}</span>
      <span>{prop.expiration}</span>
      <span>{prop.users}</span>
      <span style={{ display: "flex", justifyContent: "Center" }}>
        <span>
          <UpdateOfferModal offer={prop} />
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteOffer(prop.id);
          }}
        >
          <i class="fas fa-trash"></i>
        </span>
      </span>
    </div>
  );
}

function Offer() {
  const [Offers, setOffer] = useState([]);
  const [description, setdescription] = useState("");
  const [offValue, setoffValue] = useState("");
  const [offerCode, setofferCode] = useState("");
  const [expiration, setexpiration] = useState("");
  const [message, setMessage] = useState("");

  const GetOffer = async () => {
    axios
      .get(`${BASE_URL}/admin/offer/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res);
        setOffer(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  const postOffer = async (e) => {
    e.preventDefault();

    if (
      description.length == 0 ||
      offValue.length == 0 ||
      offerCode.length == 0 ||
      expiration.length == 0
    ) {
      return toast.error("All fields are required");
    }

    await axios
      .post(
        `${BASE_URL}/admin/offer`,
        {
          description,
          offValue,
          offerCode,
          expiration,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setdescription("");
        setoffValue("");
        setofferCode("");
        setexpiration("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetOffer();
  }, []);

  return (
    <div>
      <div className="offer">
        <div>
          <ScreenHeading heading="Offers" />
        </div>
        <div>
          <form class="form">
            <label>ADD OFFER</label>
            <br></br>
            <label className="message">{message}</label>
            <br></br>
            <label>Description</label>
            <input
              className="form-control"
              required
              placeholder="Description"
              type="text"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            ></input>
            <label> OFF Value</label>
            <input
              className="form-control"
              required
              placeholder="% OFF Value"
              onChange={(e) => {
                if (e.target.value > 100 || isNaN(e.target.value)) return;
                else setoffValue(e.target.value);
              }}
              name="offValue"
              type="text"
              value={offValue}
            ></input>
            <br></br>
            <label>Offer Code</label>
            <label>Expiration</label>
            <input
              className="form-control a"
              required
              placeholder="must be 7  charcter long"
              onChange={(e) => setofferCode(e.target.value)}
              type="text"
              value={offerCode}
            ></input>

            <input
              className="form-control a"
              required
              placeholder={new Date()}
              type="date"
              onChange={(e) => setexpiration(e.target.value)}
              value={expiration}
            ></input>
            <button onClick={postOffer} className="btn bttns" type="submit">
              Publish
            </button>
          </form>
        </div>
        <div className="pastoffer">
          <div className="offershead">
            <span>Offer Code</span>
            <span>Description</span>
            <span>Expiration</span>
            <span>Users</span>
            <span>Actions</span>
          </div>
          <div className="list">
            {Offers.map((offer, index) => {
              console.log(offer._id);
              return (
                <div>
                  <Pastoffer
                    id={offer._id}
                    key={offer._id}
                    offerCode={offer.offerCode}
                    description={offer.description}
                    expiration={offer.expiration.split("T")[0]}
                    users={offer.users.length}
                    offValue={offer.offValue}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
