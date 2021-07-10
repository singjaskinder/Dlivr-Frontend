import ScreenHeading from "../components/ScreenHeading";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import style from "./EditVehicleCategory.module.css"
import LoadingBar from "react-top-loading-bar";

const URL = "http://dlivr.herokuapp.com"
const ImgUrl = "https://storage.googleapis.com/dlivr-55a47.appspot.com/"

const EditVehicleCategory = () => {


    const history = useHistory();
    const { id } = useParams();
    const [progress, setProgress] = useState(0);

    const [name, setName] = useState("");
    const [base_value, setBase_value] = useState("");
    const [description, setDecription] = useState("");
    const [image, setImage] = useState(null);
    const [oldImg, setOldImg] = useState("")
    const [oldName, setOldName] = useState("");
    useEffect(() => {
        setProgress(70)
        axios.get(`${URL}/admin/vehicle-categories/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
        })
            .then(res => {
                setProgress(100)
                console.log(res.data)
                setName(res.data.data[0].name)
                setOldName(res.data.data[0].name)
                setOldImg(res.data.data[0].image)
                setBase_value(res.data.data[0].base_value)
                setDecription(res.data.data[0].description)
            })
            .catch(err => {
                setProgress(100)
                console.log(err)
            })
    }, [])

    const deleteCategory = () => {
        axios.delete(`${URL}/admin/vehicle-category/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
        })
            .then(res => {
                toast.success("Vehicle Category deleted!")
                history.goBack()
            })
            .catch(err => {
                console.log(err.response)
                toast.error("Unable to delete vehicle category at this moment!")
            })
    }

    const updateCategory = () => {
        if (name === "" || base_value === "" || description === "" ) {
            toast.error("Can't submit empty data")
        }
        else if (base_value < 1) {
            toast.error("please enter a valid base value for price per km.")
        }
        else{
            var categoryData = new FormData();
            categoryData.append("name", name)
            categoryData.append("base_value", base_value)
            categoryData.append("description", description)
            if(image !== null){
                categoryData.append("vehicle_image", image)

            }
            // categoryData.append("vehicle_image", image)
            setProgress(70)
            axios({
                method: 'put',
                url: `${URL}/admin/vehicle-category/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("token")),
                },
                data: categoryData
            })
                .then(res => {
                    setProgress(100)
                    toast.success("Vehicle Category Updated")
                    history.push("/vehicles/categories");
                })
                .catch(err => {
                    setProgress(100)
                    console.log(err.response.data)
                    toast.error("error")
                });
            setProgress(100)

        }
    }
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
                <ScreenHeading heading={`Vehicle Category - ${oldName}`} />
                <button onClick={() => deleteCategory()} style={{ backgroundColor: "red" }} className="addVehicleCategoryBtn">
                    delete {oldName}
                </button>
            </div>
            <div className={style.addDiv}>
                <div className={style.dataDiv}>
                    <input value={name} onChange={e => setName(e.target.value)} className={style.input} placeholder="Category Name" />
                    <input value={base_value} type="number" min="0" onChange={e => setBase_value(e.target.value)} className={style.input} placeholder="Price Per Km" />
                    <textarea value={description} onChange={e => setDecription(e.target.value)} className={style.textarea} placeholder="Description" />
                    <div className={style.selectImg}>
                        <p className={style.inputHeading}>Update Vehicle Category Image</p>
                        <input onChange={e => setImage(e.target.files[0])} type="file" />
                    </div>
                    <button onClick={()=>updateCategory()} className={style.addBtn}>Update Vehicle Category</button>
                </div>
                <div className={style.categoryImg}>
                    <img src={`${ImgUrl}${oldImg}`} alt="..." />

                </div>
            </div>
        </>
    )
}

export default EditVehicleCategory;