import ScreenHeading from "../components/ScreenHeading";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";



const URL = "http://dlivr.herokuapp.com"
const ImgUrl = "https://storage.googleapis.com/dlivr-55a47.appspot.com/"

const EditVehicleCategory = () => {

    const [name, setName] = useState("")

    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${URL}/admin/vehicle-categories/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
        })
            .then(res => {
                console.log(res.data)
                setName(res.data.data[0].name)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteCategory = () => {
        axios.delete(`${URL}/admin/vehicle-category/${id}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
        })
        .then(res=>{
            toast.success("Vehicle Category deleted!")
            history.goBack()
        })
        .catch(err=>{
            console.log(err.response)
            toast.error("Unable to delete vehicle category at this moment!")
        })
    }
    return (
        <>
            <div className="vehicleHeading">
                <ScreenHeading heading={`Vehicle Category - ${name}`} />
                <button onClick={()=>deleteCategory()} style={{backgroundColor:"red"}} className="addVehicleCategoryBtn">
                    delete {name}
                </button>
            </div>
        </>
    )
}

export default EditVehicleCategory;